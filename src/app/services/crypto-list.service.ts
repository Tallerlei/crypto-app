import { Injectable } from '@angular/core';
import { CoinFundInfo } from '../models/Coin-Fund-Info';

@Injectable({
  providedIn: 'root'
})
export class CryptoListService {
  coinFundInfos: CoinFundInfo[] = [
    new CoinFundInfo({ id: 'binancecoin', amount: 3.99176689, usdPaid: 90, targets: [] }),
    new CoinFundInfo({ id: 'bitcoin', amount: 0.07794, usdPaid: 652.00, targets: [] }),
    new CoinFundInfo({ id: 'bitcoin-cash', amount: 0.233766, usdPaid: 111, targets: [] }),
    new CoinFundInfo({ id: 'bittorrent-2', amount: 169524.371834, usdPaid: 132, targets: [0.00000024, 0.00000028, 0.00000031] }),
    new CoinFundInfo({ id: 'cardano', amount: 1354, usdPaid: 102, targets: [0.00001300, 0.00001550, 0.00001720, 0.00001940, 0.00002180, 0.00002330] }),
    new CoinFundInfo({ id: 'dent', amount: 118852, usdPaid: 141, targets: [0.00000018, 0.00000021, 0.00000027, 0.00000031, 0.00000036, 0.00000042] }),
    new CoinFundInfo({ id: 'ethereum', amount: 0.72571, usdPaid: 170.14, targets: [0.03531000, 0.03635000, 0.03773700] }),
    new CoinFundInfo({ id: 'ethos', amount: 84, usdPaid: 14.6, targets: [0.00004880, 0.00005250, 0.00005660, 0.00006320, 0.00006980, 0.00007450] }),
    new CoinFundInfo({ id: 'hshare', amount: 20.06, usdPaid: 106.22, targets: [0.00036000, 0.00041000, 0.00045000] }),
    new CoinFundInfo({ id: 'litecoin', amount: 2.45549037, usdPaid: 168.97, targets: [] }),
    new CoinFundInfo({ id: 'loopring', amount: 1751.247, usdPaid: 109, targets: [0.00001950, 0.00002200, 0.00002500] }),
    new CoinFundInfo({ id: 'medical-token-currency', amount: 4857.0062, usdPaid: 118.7, targets: [] }),
    new CoinFundInfo({ id: 'nano', amount: 52.45, usdPaid: 86, targets: [0.00028000, 0.00031000, 0.00034000, 0.00037000, 0.00040000, 0.00049000] }),
    new CoinFundInfo({ id: 'no-bs-crypto', amount: 21800, usdPaid: 1, targets: [] }),
    new CoinFundInfo({ id: 'poa-network', amount: 3135.861, usdPaid: 113.14, targets: [0.00001020, 0.00001111, 0.00001240, 0.00001380, 0.00001470, 0.00001590] }),
    new CoinFundInfo({ id: 'polymath-network', amount: 513.973, usdPaid: 52.5, targets: [0.00002910, 0.00003310, 0.00003710] }),
    new CoinFundInfo({ id: 'populous', amount: 51.32862, usdPaid: 83, targets: [0.00041500, 0.00046500, 0.00054500, 0.00062500, 0.00067500, 0.00076500] }),
    new CoinFundInfo({ id: 'power-ledger', amount: 428.571, usdPaid: 118.7, targets: [0.00003700, 0.00004420, 0.00005000] }),
    new CoinFundInfo({ id: 'republic-protocol', amount: 952, usdPaid: 32, targets: [0.00000548, 0.00000610, 0.00000666, 0.00000715, 0.00000890] }),
    new CoinFundInfo({ id: 'stellar', amount: 726.6, usdPaid: 93, targets: [0.00002600, 0.00003523, 0.00004423] }),
    new CoinFundInfo({ id: 'tron', amount: 4821.174, usdPaid: 198.7, targets: [0.00000595, 0.00000610, 0.00000640, 0.00000660, 0.00000740, 0.00000800] }),
    new CoinFundInfo({ id: 'verge', amount: 5410.584, usdPaid: 127.7, targets: [0.00000200, 0.00000225, 0.00000290] }),
    new CoinFundInfo({ id: 'wanchain', amount: 280.8, usdPaid: 135, targets: [] }),
    new CoinFundInfo({ id: 'zilliqa', amount: 6076, usdPaid: 140, targets: [0.00000278, 0.00000298, 0.00000320, 0.00000355, 0.00000390, 0.00000420] }),
  ];

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
