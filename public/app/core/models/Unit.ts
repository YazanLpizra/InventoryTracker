export class Unit {
    public unitId: String;
    public manufacturerId: string;
    public price: number;
    public mileage: number;
    public stockedDate: Date;
    public stockStatus: string = '';
    public soldDate: Date;
    public shippingStatus: string = '';
    public condition: String;

    constructor() {
    }
}