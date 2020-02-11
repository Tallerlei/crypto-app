import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  chartArray: any[] = [];
  _balance: number = 0;
  _investment: number = 0;
  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.chartArray = [
      ['Coin', 'USD Value']
    ];
    this.dataService.coinData.forEach(coin => {
      this._balance += coin.gainInUsd;
      this._investment += coin.usdPaid;
      this.chartArray.push([coin.id, coin.gainInUsd]);
    });

    setTimeout(() => {(window as any).drawChart(this.chartArray)}, 1000);
  }

  buttonClicked(event) {
  }

  get investment(): string {
    return this._investment.toFixed(2);
  }
  get balance(): string {
    return this._balance.toFixed(2);
  }
  get percentageGain(): number {
    return Math.round((this._balance / this._investment) * 100 - 100);

  }
}
