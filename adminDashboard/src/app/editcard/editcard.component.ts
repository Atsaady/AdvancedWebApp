import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {StockService} from '../shared/services/stock.service';


@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.scss']
})
export class EditcardComponent implements OnInit {

  @Input()
  stockname: string;

  constructor(@Inject(MAT_DIALOG_DATA) data, private service: StockService, public dialogRef: MatDialogRef<EditcardComponent>) {
    this.stockname = data.stockname;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    let stockrank = (document.getElementById('stockrank') as HTMLInputElement).value;
    let companyrank = (document.getElementById('companyrank') as HTMLInputElement).value;
    // tslint:disable-next-line:triple-equals
    if (stockrank == null || stockrank == '') { stockrank = '0'; }
    // tslint:disable-next-line:triple-equals
    if (companyrank == null || companyrank == '') { companyrank = '0'; }
    this.service.updateStock(this.stockname, stockrank, companyrank).subscribe();
  }

  // tslint:disable-next-line:typedef
  onClose() {
    this.dialogRef.close();
  }
}
