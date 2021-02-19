import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TermsService } from '../terms.service';

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

  constructor(private termsService: TermsService) {}

  ngOnInit() {
    this.termsService.getTerms().then((response) => {
      this.terms = response.data;
      this.dataSource = new MatTableDataSource(this.terms);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
