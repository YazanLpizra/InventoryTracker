import { Unit } from './Unit';
import { Car } from './Car';

export class Part {
    public partNumber: String;
    public partName: String;
    public description: String;
    public compatibleCars: Car[] = [];
    public units: Unit[] = [];

    constructor() { }
}

