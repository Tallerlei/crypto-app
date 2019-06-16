export class CoinFundInfo {
    id: string;
    usdPaid: number;
    amount: number;
    targets: number[];

    constructor(data) {
        this.id = data.id;
        this.amount = data.amount;
        this.usdPaid = data.usdPaid.toFixed(2);
        this.targets = data.targets;
    }
}
