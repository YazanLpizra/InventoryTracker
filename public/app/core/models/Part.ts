import { Unit } from './Unit';
import { Car } from './Car';

export class Part {
    constructor(
        public partNumber: String,
        public partName: String,
        public description: String,
        public compatibleCars: Car[] = [],
        public units: Unit[] = []
    ) {

    }
}

