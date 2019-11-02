import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

user: any;
  @Input('name') userName: string;

  constructor() {
    
   }


  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'Quality Assurance Engineer',
      address: '1/191,Ulahitiyawa, Middeniya',
      phone: [
        '0714716895',
        '0712092123',
        '0712515325'
      ]
    };
  }

}
