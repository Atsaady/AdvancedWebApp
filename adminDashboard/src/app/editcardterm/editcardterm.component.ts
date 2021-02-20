import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {StockService} from '../shared/services/stock.service';
import {TermsService} from "../modules/terms.service";

@Component({
  selector: 'app-editcardterm',
  templateUrl: './editcardterm.component.html',
  styleUrls: ['./editcardterm.component.scss']
})
export class EditcardtermComponent implements OnInit {

  @Input()
  termname: string;

  constructor(@Inject(MAT_DIALOG_DATA) data, private service: TermsService, public dialogRef: MatDialogRef<EditcardtermComponent>) {
    this.termname = data.termname;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    let termname = (document.getElementById('termname') as HTMLInputElement).value;
    let des = (document.getElementById('description') as HTMLInputElement).value;
    let firstletter = (document.getElementById('firstletter') as HTMLInputElement).value;

    // tslint:disable-next-line:triple-equals
    if (termname == null || termname == '') { termname = '0'; }
    // tslint:disable-next-line:triple-equals
    if (des == null || des == '') { des = '0'; }
    // tslint:disable-next-line:triple-equals
    if (firstletter == null || firstletter == '') { firstletter = '0'; }

    this.service.updateTerm(this.termname, termname, des, firstletter).subscribe();
  }

  // tslint:disable-next-line:typedef
  onClose() {
    this.dialogRef.close();
  }
}
