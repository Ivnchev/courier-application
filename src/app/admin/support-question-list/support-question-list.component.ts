import { Component, OnInit } from '@angular/core';
import { ISupQuestion } from 'src/app/shared/interfaces';
import { SupportQuestionsService } from '../services/support-questions.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-support-question-list',
  templateUrl: './support-question-list.component.html',
  styleUrls: ['./support-question-list.component.css']
})
export class SupportQuestionListComponent implements OnInit {

  searchValue: string
  questions: ISupQuestion[]
  isLoading: boolean = false
  hasError: boolean = false

  constructor(
    private questionService: SupportQuestionsService,
    private matDialog: MatDialog,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.hasError = false
    this.questionService.getAll().subscribe({
      next: (data: ISupQuestion[]) => {
        this.isLoading = false
        this.questions = data
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  toogleInfo(data): void {
    data.showDetails = !data.showDetails
  }

  openModal(event: HTMLElementEventMap, dataId: string, dataRow: HTMLElement): void {
    this.hasError = false
    const dialogCfg = new MatDialogConfig()

    dialogCfg.disableClose = true;
    dialogCfg.id = "custom-modal";
    dialogCfg.data = {
      title: "Are you sure you want to delete?",
      isConfirmed: true,
    }
    const modalDialog = this.matDialog.open(ModalComponent, dialogCfg);

    modalDialog.afterClosed().subscribe({
      next: result => {
        if (result) {
          this.deleteHandler(dataId, dataRow)
        }
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  deleteHandler(dataId: string, dataRow: HTMLElement): void {
    this.isLoading = true
    this.hasError = false
    this.questionService.deleteOne(dataId).subscribe({
      next: (data: ISupQuestion) => {
        this.isLoading = false
        dataRow.remove()
      },
      error: err => {
        this.hasError = true
        this.isLoading = false
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

}
