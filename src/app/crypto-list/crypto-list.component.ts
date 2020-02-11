import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoListService } from '../services/crypto-list.service';
import { DataService } from '../services/data.service';
import { MatTable, MatSort, MatTableDataSource } from '@angular/material';
import { Coin } from '../models/Coin';
import { Router } from '@angular/router';

@Component({
  selector: 'crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.less']
})
export class CryptoListComponent implements OnInit {
  @ViewChild(MatTable, null) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['icon', 'marketRang', 'gainInPercent', 'oneDayChange', 'sevenDayChange'];
  // displayedColumns: string[] = ['icon', 'marketRang', 'btcValue', 'usdValue', 'eurValue', 'gainInPercent', 'oneDayChange', 'sevenDayChange'];

  constructor(
    public cryptoListService: CryptoListService,
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getCoinDataFromService();
    // can be optimized by gathering all requests then execute and wait for finished

  }

  getCoinDataFromService() {
    this.dataSource.data = this.coins;

    for (const coinId of this.coinList) {
      const some = this.coins.some(coin => {
        return coin.id === coinId
      });
      if (!some) {
        console.log('Getting Coin Information for "' + coinId + '".')
        this.storeCoinData(coinId);
      }
    }
  }

  refreshClicked(event) {
    this.dataService.clearCoinData();
    this.getCoinDataFromService();
  }

  storeCoinData(coin: string) {
    this.dataService.getCoinData(coin).subscribe(
      (coinData) => {
        // this.table.renderRows();
        this.dataService.storeCoin(new Coin(coinData, this.cryptoListService.getCoinFundInfo((coinData as any).id)));
        this.dataSource.data = this.coins;
      }
    )
  }

  rowClicked(event, row) {
    console.log(row);
    this.router.navigate(['/coin', row.id])

  }

  get coinList(): string[] {
    return this.cryptoListService.getCoinList();
  }

  get coins(): Coin[] {
    return this.dataService.coinData;
  }

  get lastCoinUpdate(): Date {
    return this.dataService.lastCoinUpdate;
  }

}
