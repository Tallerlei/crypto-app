import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Coin } from '../models/Coin';
import { Params, ActivatedRoute } from '@angular/router';
import { CryptoListService } from '../services/crypto-list.service';
import { CoinFundInfo } from '../models/Coin-Fund-Info';

@Component({
  selector: 'coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.less']
})
export class CoinDetailComponent implements OnInit {
  id: string;
  constructor(
    public dataService: DataService,
    public cryptoListService: CryptoListService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('Showing Detail View for "' + this.id + '".');
    });
  }

  valueInSatoshi(value: number): number {
    return Math.round(value * 100000000);
  }

  targetReached(target: number): boolean {
    return target < this.coinData.btcValue;
  }

  get coinData(): Coin {
    return this.dataService.getCoin(this.id);
  }
  get coinFundInfo(): CoinFundInfo {
    return this.cryptoListService.getCoinFundInfo(this.id);
  }

  get currentValue(): number {
    return this.coinFundInfo.amount * this.coinData.usdValue;
  }

  get gainInPercent(): number {
    return Math.round(((this.currentValue / this.coinFundInfo.usdPaid) * 100) - 100);
  }
}
