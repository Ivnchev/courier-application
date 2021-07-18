import { Component, OnInit } from '@angular/core';
import { ISupQuestion } from 'src/app/shared/interfaces';
import { SupportQuestionsService } from '../services/support-questions.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-support-question-list',
  templateUrl: './support-question-list.component.html',
  styleUrls: ['./support-question-list.component.css']
})
export class SupportQuestionListComponent implements OnInit {

  searchValue: string
  questions: ISupQuestion[]
  isLoading: boolean = false

  constructor(
    private questionService: SupportQuestionsService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.questionService.getAll().subscribe({
      next: (data: ISupQuestion[]) => {
        this.isLoading = false
        this.questions = data
      },
      error: err => {
        this.isLoading = false
      }
    })
  }

  toogleInfo(data): void {
    data.showDetails = !data.showDetails
  }

  openModal(event: HTMLElementEventMap, dataId: string, dataRow: HTMLElement): void {
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
        this.isLoading = false
      }
    })
  }

  deleteHandler(dataId: string, dataRow: HTMLElement): void {
    this.isLoading = true
    this.questionService.deleteOne(dataId).subscribe({
      next: (data: ISupQuestion) => {
        this.isLoading = false
        dataRow.remove()
      },
      error: err => {
        this.isLoading = false
      }
    })
  }

}
