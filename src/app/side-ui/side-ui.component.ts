import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-side-ui',
  templateUrl: './side-ui.component.html',
  styleUrls: ['./side-ui.component.scss']
})
export class SideUiComponent implements OnInit {

  public readonly emailForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.emailForm = this.fb.group({
    to: '',
    cc: '',
    bcc: '',
    Subject: '',
    Content: '',
    })
  }
  ngOnInit() {
  }
 onClick() {
 }
}
