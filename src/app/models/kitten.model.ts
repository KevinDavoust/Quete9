export class KittenModel {

    public isAdopted: boolean = false;

    constructor(
        public name: string,
        public race: string,
        public birthdate: string,
        public image: string
    ) {}
}
