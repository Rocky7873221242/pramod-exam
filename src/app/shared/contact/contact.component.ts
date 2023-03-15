import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contatdetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  con = {} as Contact;
  cons = [] as Contact[];
  conForm!: FormGroup;

  ngOnInit(): void {
    this.conForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      ph: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    })
  }

  constructor() {
    this.cons = [
      { name: "pramod", address: "home1", ph: 1023490, email: "Pramod@308.com" },
      { name: "gulu", address: "home2", ph: 97432345, email: "gulu@gmail.com" },
      { name: "miki", address: "home3", ph: 3456, email: "miki@gmail.com" },
      { name: "happy", address: "home4", ph: 4567, email: "happy@gmail.com" }
    ]
  }

  addValues(val: any) {
    this.con = this.conForm.value;
    this.cons.push(this.con);
    alert("Registered Successfully");
    console.log(this.cons);
  }

}
