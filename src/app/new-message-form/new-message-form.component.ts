import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {
  public messageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      'accountType': new FormControl('Personal', Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }
}