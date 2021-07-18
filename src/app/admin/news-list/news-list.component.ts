import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { INews } from 'src/app/shared/interfaces';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnChanges {
  
  searchValue: string
  news: INews[]
  isLoading: boolean = false

  constructor(
    private newsService: NewsService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.newsService.getAll().subscribe({
      next: (data: INews[]) => {
        this.isLoading = false
        this.news = data
      },
      error: err => {
        this.isLoading = false
      }
    })
  }

  ngOnChanges(): void {
    this.newsService.getAll().subscribe({
        next: (data: INews[]) => this.news = data,
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
    this.newsService.deleteOne(dataId).subscribe({
      next: (data: INews) => {
        this.isLoading = false
        dataRow.remove()
      },
      error: err => {
        this.isLoading = false
      }
    })
  }

  updateHandler(event: HTMLElementEventMap, dataId: string): void {
    this.router.navigateByUrl(`/admin/news/${dataId}/edit`)
  }


}
