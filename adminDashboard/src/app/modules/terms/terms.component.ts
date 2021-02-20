import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TermsService } from '../terms.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditcardtermComponent} from '../../editcardterm/editcardterm.component';
import {AddtermComponent} from "../../addterm/addterm.component";

interface ITerms {
  title?: string;
  description?: string;
  urlVideo?: string;
  firstLetter?: string;
}

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  dataSource: MatTableDataSource<ITerms>;
  terms: ITerms[] = [];
  columns: string[] = [
    'description',
    'title',
    'urlVideo',
    'firstLetter',
    'actions',
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private termsService: TermsService, private dialog: MatDialog) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.termsService.getTerms().then((response) => {
      this.terms = response.data;
      this.dataSource = new MatTableDataSource(this.terms);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  deleteTerm(termName: string) {
    this.termsService.deleteStock(termName).subscribe(() => {
    });
  }

  // tslint:disable-next-line:typedef
  editTerm(term) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {termname: term};
    this.dialog.open(EditcardtermComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  addTerm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    this.dialog.open(AddtermComponent, dialogConfig);
  }


}
