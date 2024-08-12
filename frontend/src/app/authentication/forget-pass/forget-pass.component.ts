import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    templateUrl: './forget-pass.component.html'
})

export class ForgetPassComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]]
    });
  }
}
