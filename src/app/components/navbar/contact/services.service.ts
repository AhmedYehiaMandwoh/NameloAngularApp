import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  messages = [
    {
    name:  'Ahmed',
    compName: 'Namelo',
    email: 'ahmedyhayamand15@yahoo.com',
    phone: '0123654006',
    text: 'Thanks For Your Services I Want To See All My Details',
  },
  {
    name:  'Yehia',
    compName: 'Marona',
    email: 'yehiamandwoh10@yahoo.com',
    phone: '0102365011254',
    text: 'Thanks For Your Services I Want To See All My Details',
  },
];
  constructor() { }
}
