import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/Coin';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://api.coingecko.com/api/v3/';
  coinData: Coin[] = [];
  lastCoinUpdate: Date = null;

  constructor(public http: HttpClient) {

    // Retrieve the object from storage
    const retrievedObject = JSON.parse(localStorage.getItem('cryptoAppCoinData'));

    if (retrievedObject) {
      retrievedObject.forEach(coinObject => {
        const recoveredCoin = coinObject;
        this.coinData.push(recoveredCoin);
        console.log('Added "' + recoveredCoin.id + '" from local storage.')
      });
      let lastUpdate = localStorage.getItem('lastCoinUpdate');
      if (lastUpdate)
        this.lastCoinUpdate = new Date(lastUpdate);
      console.log('Retrieved last update time from local storage (' + lastUpdate + ').')
    }

  }

  getCoinFundData() {
    return this.http.get("./assets/trades.json")
  }

  getCoin(coinId: string): Coin {
    return this.coinData.find(coin => coin.id === coinId);
  }

  getCoinData(coin) {
    return this.http.get(this.baseUrl + 'coins/' + coin + '?localization=false');
  }

  clearCoinData() {
    this.coinData = [];
  }

  storeCoin(coin: Coin) {
    this.coinData.push(coin);

    // Put the object into storage
    localStorage.setItem('cryptoAppCoinData', JSON.stringify(this.coinData));
    const currentDate: Date = new Date(Date.now());
    localStorage.setItem('lastCoinUpdate', currentDate.toString());
    this.lastCoinUpdate = currentDate;

  }

  pingBinance() {
    return this.http.get('https://api.binance.com/api/v1/time');
  }
}
