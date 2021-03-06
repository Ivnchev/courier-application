import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { QuestionsService } from 'src/app/admin/services/questions.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {

  isAdmin$ = this.authService.isAdmin$
  searchValue: string
  questions: IQuestion[]
  isLoading: boolean = false
  hasError: boolean = false


  constructor(
    private questionService: QuestionsService,
    private authService: AuthService,
    private matDialog: MatDialog,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.hasError = false
    this.questionService.getQuestions().subscribe({
      next: (data: IQuestion[]) => {
        this.questions = data
      },
      error: err => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })

  }


  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

  openModal(event: HTMLElementEventMap, questionId: string, questionRow: HTMLElement): void {
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
          this.deleteHandler(questionId, questionRow)
        }
      },
      error: err => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  deleteHandler(questionId: string, questionRow: HTMLElement): void {
    this.isLoading = true
    this.hasError = false
    this.questionService.deleteQuestion(questionId).subscribe({
      next: (data: IQuestion) => {
        this.isLoading = false
        questionRow.remove()
      },
      error: err => {
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  updateHandler(event: HTMLElementEventMap, dataId: string): void {
    this.router.navigateByUrl(`/admin/q&a/${dataId}/edit`)
  }

}
