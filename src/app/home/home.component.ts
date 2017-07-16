import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item/portfolio-item'
import { PortfolioService, PortfolioServiceBase } from '../portfolio-item/portfolio.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolioItems: PortfolioItem[];
  portfolioService: PortfolioServiceBase;

  constructor(portfolioService: PortfolioServiceBase) {
    this.portfolioService = portfolioService;
  }

  ngOnInit() {
    this.portfolioService.getPortfolioItems().then(_ => this.portfolioItems = _);
  }
}
