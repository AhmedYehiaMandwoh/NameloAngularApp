import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

messages = this.Service.messages;
  constructor(private Service: ServicesService) { 
  }

  ngOnInit() {
  }

}
