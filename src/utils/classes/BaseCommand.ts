export default class BaseCommand {
    name: string;
    category: string;
    constructor(name : string, category : string) {
        this.name = name;
        this.category = category;
    }
};