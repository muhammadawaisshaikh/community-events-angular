import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-group-stepper',
  templateUrl: './user-group-stepper.component.html',
  styleUrls: ['./user-group-stepper.component.scss']
})
export class UserGroupStepperComponent implements OnInit {

  private stepper: Stepper | undefined;
  userGroupForm: FormGroup = new FormGroup({
    location: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    this.stepper = new Stepper(<Element>document.querySelector('#group-stepper'), {
      linear: false,
      animation: true
    });
  }

  next() {
    if (this.stepper) {
      this.stepper.next();
    }
  }

  previous() {
    if (this.stepper) {
      this.stepper.previous();
    }
  }



}
