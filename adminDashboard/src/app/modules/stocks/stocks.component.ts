
import {Component, OnInit, Inject} from '@angular/core';
import {StockService} from '../../shared/services/stock.service';
import {Stock} from '../../shared/models/stock.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditcardComponent} from '../../editcard/editcard.component';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  panelOpenState = false;

  // tslint:disable-next-line:ban-types
  stocks: Stock[] = [];

  constructor(private stocksService: StockService, private dialog: MatDialog) {
    this.fetchStocks();
  }

  // tslint:disable-next-line:typedef
  deleteStock(stockName: string) {
    this.stocksService.deleteStock(stockName).subscribe(() => {
      this.fetchStocks();
    });
  }

  ngOnInit(): void {}

  fetchStocks(): void {
    this.stocksService.getAllStocks().subscribe((stocks) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].rank[0]) {
          this.stocksService.getRank(stocks[i].rank[0]).subscribe((rank) => {
            stocks[i].stockrank = rank[0].stockrank;
            stocks[i].companyrank = rank[0].companyrank;
          });
        }
        if (stocks[i].comments[0]) {
          this.stocksService
            .getStockComments(stocks[i].name)
            .subscribe((comm) => {
              stocks[i].commentsData = comm;
            });
        }
      }
      this.stocks = stocks;
      console.log(this.stocks);
    });
  }

  // tslint:disable-next-line:typedef
  editStock(stock) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {stockname: stock};
    this.dialog.open(EditcardComponent, dialogConfig);
  }
}



