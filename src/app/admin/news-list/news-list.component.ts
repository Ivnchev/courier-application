import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { INews } from 'src/app/shared/interfaces';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() needRefresh
  searchValue: string
  news: INews[]
  isLoading: boolean = false
  hasError: boolean = false
  subscription: Subscription

  constructor(
    private newsService: NewsService,
    private router: Router,
    private matDialog: MatDialog,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.hasError = false
    this.subscription = this.newsService.getAll().subscribe({
      next: (data: INews[]) => {
        this.isLoading = false
        this.news = data
      },
      error: err => {
        this.isLoading = false
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  ngOnChanges(): void {
    this.hasError = false
    if (!this.needRefresh) {
      this.subscription = this.newsService.getAll().subscribe({
        next: (data: INews[]) => {
          this.isLoading = false
          this.news = []
          this.news = data
        },
        error: err => {
          this.isLoading = false
          this.hasError = true
          this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
        }
      })
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
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
        this.isLoading = false
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  deleteHandler(dataId: string, dataRow: HTMLElement): void {
    this.isLoading = true
    this.hasError = false
    this.newsService.deleteOne(dataId).subscribe({
      next: (data: INews) => {
        this.isLoading = false
        dataRow.remove()
      },
      error: err => {
        this.isLoading = false
        this.hasError = true
        this.alertService.create({ type: 'danger', message: err.error, time: 3000 })
      }
    })
  }

  updateHandler(event: HTMLElementEventMap, dataId: string): void {
    this.router.navigateByUrl(`/admin/news/${dataId}/edit`)
  }


}
