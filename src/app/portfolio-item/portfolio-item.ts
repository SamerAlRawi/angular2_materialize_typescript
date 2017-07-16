export class PortfolioItem {
    img: string;
    title: string;
    description: string;

    constructor(title: string = '', description: string = '', img: string = '') {
        this.img = img;
        this.title = title;
        this.description = description;
    }
}
