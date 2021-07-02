import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { imageValidator } from 'src/app/auth/validators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  f: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storeService: StoreService
  ) {
    this.f = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required, imageValidator]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    })
  }

  ngOnInit(): void { }


  newsHandler(formData: object): void {
    this.storeService.postNews(formData).subscribe(data => {
      this.router.navigateByUrl('/')
    })

  }



}
