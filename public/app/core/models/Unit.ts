export class Unit {
    public unitId: String;
    public manufacturerId: string;
    public price: number;
    public mileage: number;
    public stockedDate: Date;
    public soldDate: Date;
    public soldStatus: ['in_stock', 'ordered', 'shipped', 'no_stock'];
    public condition: String;

    constructor() {
    }
}