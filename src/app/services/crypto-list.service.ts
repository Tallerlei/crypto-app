import { Injectable } from '@angular/core';
import { CoinFundInfo } from '../models/Coin-Fund-Info';

@Injectable({
  providedIn: 'root'
})
export class CryptoListService {
  coinFundInfos: CoinFundInfo[] = [];

  constructor() {
  }

  getCoinFundInfo(coinId) {
    return this.coinFundInfos.find(coinInfo => coinInfo.id === coinId);
  }

  getCoinList(): string[] {
    return this.coinFundInfos.map(fundInfo => fundInfo.id);
  }

}
