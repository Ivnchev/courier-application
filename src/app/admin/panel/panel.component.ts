import { Component, OnInit } from '@angular/core';
import { ControlPanelViewDirective } from '../control-panel-view.directive';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {

  constructor() { }

  resetControls = () => this.controls = {
    listOfNews: true,
    listOfQuestions: true,
    createNews: true,
    createQuestions: true,
  }

  controls = this.resetControls()

  public isVisible = false

  ngOnInit(): void {
    this.controls.listOfNews = false
  }

  toggleView(controlsView: ControlPanelViewDirective): void {
    const el = controlsView.elementRef.nativeElement.id
    this.controls = this.resetControls()
    this.controls[el] = !this.controls[el]
  }

  isPosted(done: boolean) {
    if(done){
      this.controls = this.resetControls()
      this.controls.listOfNews = false
    }
  }
}
