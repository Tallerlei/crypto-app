import { CryptoListService } from '../services/crypto-list.service';
import { CoinFundInfo } from './Coin-Fund-Info';

export class Coin {
  description: string;
  id: string;
  symbol: string;
  btcValue: number;
  usdValue: number;
  eurValue: number;
  oneDayChange: number;
  sevenDayChange: number;
  marketRang: number;
  gainInUsd: number;
  usdPaid: number;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  gainInPercent: number;
  constructor(data, coinFundInfo: CoinFundInfo) {
    this.description = data.description.en;
    this.symbol = data.symbol;
    this.btcValue = data.market_data.current_price.btc.toFixed(10);
    this.usdValue = data.market_data.current_price.usd;
    this.eurValue = data.market_data.current_price.eur;
    this.oneDayChange = data.market_data.price_change_percentage_24h.toFixed(2);
    this.sevenDayChange = data.market_data.price_change_percentage_7d.toFixed(2);
    this.marketRang = data.market_cap_rank;
    this.image = data.image;
    this.id = data.id;
    if (coinFundInfo) {
      this.gainInPercent = Math.round((((coinFundInfo.amount * this.usdValue) / coinFundInfo.usdPaid) * 100) - 100);
      this.gainInUsd = (this.gainInPercent / 100) * coinFundInfo.usdPaid + coinFundInfo.usdPaid;
      this.usdPaid = coinFundInfo.usdPaid;
    }
  }


}
