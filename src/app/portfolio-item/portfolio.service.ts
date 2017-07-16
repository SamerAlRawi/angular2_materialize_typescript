import { PortfolioItem } from './portfolio-item'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Request, Response, Headers } from '@angular/http';

export abstract class PortfolioServiceBase {
    abstract getPortfolioItems(): Promise<PortfolioItem[]>;
}

@Injectable()
export class PortfolioService implements PortfolioServiceBase {
    protected http: Http;
    private usersResponse: any;
    portfolioItems: PortfolioItem[];

    constructor(backend: Http) {
        this.http = backend;
    }

    getPortfolioItems(): Promise<PortfolioItem[]> {
        const promise = new Promise<PortfolioItem[]>((resolve, reject) => {
            this.http.get('/assets/getPortfolio.json').subscribe(
                _ => this.portfolioItems = JSON.parse(_.text()), // data
                console.log, // error
                () => resolve(this.portfolioItems) // action
            );
        });
        return promise;
    }
}

