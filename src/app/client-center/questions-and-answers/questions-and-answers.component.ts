import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { QuestionsService } from 'src/app/admin/services/questions.service';
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

  constructor(
    private questionService: QuestionsService,
    private authService: AuthService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.questionService.getQuestions().subscribe({
      next: (data: IQuestion[]) => {
        this.questions = data
      }
    })

  }


  toogleInfo(question): void {
    question.showDetails = !question.showDetails
  }

  openModal(event: HTMLElementEventMap, questionId: string, questionRow: HTMLElement): void {
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
      }
    })
  }

  deleteHandler(questionId: string, questionRow: HTMLElement): void {
    this.isLoading = true
    this.questionService.deleteQuestion(questionId).subscribe({
      next: (data: IQuestion) => {
        this.isLoading = false
        questionRow.remove()
      }
    })
  }


}
