import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/core/services/store.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
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
    private storeService: StoreService,
    private authService: AuthService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.storeService.getQuestions().subscribe({
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
    this.storeService.deleteQuestion(questionId).subscribe({
      next: (data: IQuestion) => {
        this.isLoading = false
        questionRow.remove()
      }
    })
  }


}
