import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cryptolist',
    component: CryptoListComponent
  },
  {
    path: 'coin/:id',
    component: CoinDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
