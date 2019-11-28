import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  purchaseData = [
    {id: 1, name: 'Adidas Pureboost GO 3 White', date: 'Sep 12, 2019', store: 'Kickstore', price: '$130'},
    {id: 1, name: 'Adidas Pureboost GO 3 White', date: 'Sep 12, 2019', store: 'Kickstore', price: '$130'},
    {id: 1, name: 'Adidas Pureboost GO 3 White', date: 'Sep 12, 2019', store: 'Kickstore', price: '$130'},
    {id: 1, name: 'Adidas Pureboost GO 3 White', date: 'Sep 12, 2019', store: 'Kickstore', price: '$130'},
    {id: 1, name: 'Adidas Pureboost GO 3 White', date: 'Sep 12, 2019', store: 'Kickstore', price: '$130'},
  ];

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
  }

}
