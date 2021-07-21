import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService, IAlert } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit, OnDestroy {
  errors: any = []
  type: string
  status: boolean
  time: number
  message: any
  color: object

  alerts: IAlert[] = [];

  alertSub: Subscription

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {

    this.alertSub = this.alertService.alert$.subscribe({
      next: data => {
        if (data == undefined) return;
        this.status = true
        this.type = data?.type
        this.time = data?.time
        this.message = data?.message
        switch (this.type) {
          case 'danger':
            this.color = this.changeColor('rgba(240, 128, 128, 0.6)', 'rgba(240, 71, 71, 0.6)')
            break;
          case 'info':
            this.color = this.changeColor('rgba(117, 213, 212, 0.6)', 'rgba(145, 226, 225, 0.6)')
            break;
          default:
            this.color = this.changeColor('rgba(240, 128, 128, 0.6)', 'rgba(240, 71, 71, 0.6)')
            break;
        }

        if (this.message instanceof Array) {
          this.errors = this.message.map(x => { return { type: this.type, message: x, time: this.time } })
          this.alerts = [...this.alerts, ...this.errors]
        } else {
          if (!this.alerts.find(x => x.message == data.message)) {
            this.alerts.push(data)
          }
        }

        if (this.status === true) {
          setTimeout(() => {
            if (this.message instanceof Array) { return this.errors.forEach(x => { this.removeAlert(x) }); }
            this.removeAlert(data)
          }, this.time);
        }
      }
    })


  }

  ngOnDestroy(): void {
    this.alertSub.unsubscribe()
  }

  changeColor(color: string, border: string): object {
    return { 'background-color': color, 'border': '1px solid ' + border }
  }

  removeAlert(alert): void {
    if (!this.alerts.includes(alert)) return;

    this.alerts = this.alerts.filter(x => x !== alert);
  }

  close(): void {
    this.alerts = []
  }

}
