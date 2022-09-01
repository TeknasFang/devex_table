import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {
  onClick(data:any){
    console.log(data)
  }
  editorOptions!:any;
  currencyStatus = [
    'Indian','Australian','United States','United Kingdom','German'
  ];

 currency = [
    {
      currency: 'Indian',
      currentPrice: 1000,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'Australian',
      currentPrice: 30,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'United States',
      currentPrice: 0,
      lastPrice: 10,
      difference: 'positive or negative',
    },
    {
      currency: 'United Kingdom',
      currentPrice: 20,
      lastPrice: 20,
      difference: 'positive or negative',
    },
    {
      currency: 'German',
      currentPrice: 2,
      lastPrice: 20,
      difference: 'positive or negative',
    }
  ];
  
  constructor() {}

  ngOnInit(): void {}

}
