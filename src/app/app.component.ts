import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { CryptoListService } from './services/crypto-list.service';
import { CoinFundInfo } from './models/Coin-Fund-Info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'crypto-app';
  constructor(
    private router: Router,
    public dataService: DataService,
    public cryptoListService: CryptoListService
  ) { }

  ngOnInit(): void {
    this.dataService.getCoinFundData().subscribe((res) => {
      const infos: CoinFundInfo[] = (res as any).coinFundInfos;
      infos.forEach(info => this.cryptoListService.coinFundInfos.push(new CoinFundInfo(info)));
    });
  }

  homeClicked(event) {
    this.router.navigate(['']);
  }

  cryptoListClicked(event) {
    this.router.navigate(['cryptolist']);
  }

  buttonClicked(event) {
  }
}
