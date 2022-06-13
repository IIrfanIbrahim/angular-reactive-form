import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  constructor() { }

  @Output() newData = new EventEmitter<any>()
  // profileForm: FormGroup;

  // ngOnInit(): void {
  // }
  profileForm = new FormGroup({
    age : new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")],),
    name : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    company : new FormControl('', Validators.required),
    phone : new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });
  
  isShowFormTable: boolean = false; 
  isHiddenFormTable : boolean = false;

  showForm() {
    this.isShowFormTable = false;
    this.isHiddenFormTable = true;
    console.warn(this.profileForm.value);
  }
  hiddeForm() {
    this.isHiddenFormTable = false;
    this.isShowFormTable = false;
    this.profileForm.reset();
  }

  submitForm() {
    this.newData.emit(this.profileForm.value);
    this.hiddeForm()
  }
}
