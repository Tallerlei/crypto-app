import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Binance from 'binance-api-node';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  binance = Binance();
  title = 'crypto-app';
  constructor(
    private router: Router,
    public dataService: DataService
  ) { }

  homeClicked(event) {
    this.router.navigate(['']);
  }

  cryptoListClicked(event) {
    this.router.navigate(['cryptolist']);
  }

  buttonClicked(event) {
    // this.binance.time().then(res => console.log(res));
    // this.binance.accountInfo().then(res => console.log(res));
    this.dataService.pingBinance().subscribe(res => console.log(res));
  }
}
