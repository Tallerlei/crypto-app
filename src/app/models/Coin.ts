export class Coin {
  id: string;
  symbol: string;
  btcValue: number;
  usdValue: number;
  eurValue: number;
  oneDayChange: number;
  sevenDayChange: number;
  marketRang: number;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  constructor(data) {
    this.symbol = data.symbol;
    this.btcValue = data.market_data.current_price.btc.toFixed(10);
    this.usdValue = data.market_data.current_price.usd;
    this.eurValue = data.market_data.current_price.eur;
    this.oneDayChange = data.market_data.price_change_percentage_24h.toFixed(2);
    this.sevenDayChange = data.market_data.price_change_percentage_7d.toFixed(2);
    this.marketRang = data.market_cap_rank;
    this.image = data.image;
    this.id = data.id;
  }
}
