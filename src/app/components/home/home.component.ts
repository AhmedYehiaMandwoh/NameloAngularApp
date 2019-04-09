import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  subscribes = [
  {
    name: 'Yehia Mandwoh',
    email: 'yhayamandwoh98@gmail.com'
  },
  {
    name: 'Ahmed Yehia Mandwoh',
    email: 'ahmedyhaya91@gmail.com'
  },
  {
    name: 'Hazem Yehia Mandwoh',
    email: 'hazemyhaya91@gmail.com'
  },
  {
    name: 'Muhammed Yehia Mandwoh',
    email: 'mohamedyhaya91@gmail.com'
  },
];
  name = '';
  email = '';
  constructor(private ngFlashMessage: NgFlashMessageService) { }
  // Subscribe Us
  subscribeUs(value) {
    if (!this.name || !this.email) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Please Fill All Fields'], dismissible: true,
        timeout: 2000, type: 'danger'
      });
    } else {
      this.subscribes.push({ name: value.name, email: value.email });
      this.ngFlashMessage.showFlashMessage({
        messages: ['Thanks For Subscribe Us'], dismissible: true,
        timeout: 2000, type: 'success'
      });
      this.name = '';
      this.email = '';
    }
  }
  // Scroll To
  scrollTo() {
    window.scrollTo(0, 550);
  }
  ngOnInit() {
  }
 

  
}
