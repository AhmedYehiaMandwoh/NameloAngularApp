import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  name = '';
  compName = '';
  email = '';
  phone = '';
  text = '';
  constructor(private router: Router,
              private Service: ServicesService,
              private ngFlashMessage: NgFlashMessageService) {
  }

  ngOnInit() {
  }
  // On Submit Form
  onSubmit(value) {
    if (!this.name && !this.compName && !this.email && !this.phone && !this.text) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Please Fill All Fields'], dismissible: true,
        timeout: 2000, type: 'danger'
      });
    } else if (!this.name || !this.compName || !this.email || !this.phone || !this.text) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Please Fill All Fields'], dismissible: true,
        timeout: 2000, type: 'danger'
      });
    } else {
      this.Service.messages.push({ name: value.name, compName: value.compName, email: value.email, phone: value.phone, text: value.text });
      this.router.navigate(['message']);
    }

  }



}

