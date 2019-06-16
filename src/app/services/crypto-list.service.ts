import { Injectable } from '@angular/core';
import { CoinFundInfo } from '../models/Coin-Fund-Info';

@Injectable({
  providedIn: 'root'
})
export class CryptoListService {
  coinFundInfos: CoinFundInfo[] = [];
  coinList: string[] = ["litecoin", "dent", "bittorrent-2", "no-bs-crypto", "hshare", "power-ledger", "loopring", "polymath-network",
    "republic-protocol", "poa-network", "zilliqa", "ethos", "medical-token-currency", "binancecoin", "bitcoin", "nano", "populous",
    "ethereum", "verge", "bitcoin-cash", "cardano", "stellar", "tron", "wanchain"];


  constructor() {
  }

  getCoinFundInfo(coinId) {
    return this.coinFundInfos.find(coinInfo => coinInfo.id === coinId);
  }

  getCoinList(): string[] {
    return this.coinList;
  }

}
