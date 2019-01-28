import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SchoolDataTableDataSource } from './school-data-table-datasource';

@Component({
  selector: 'app-school-data-table',
  templateUrl: './school-data-table.component.html',
  styleUrls: ['./school-data-table.component.scss']
})
export class SchoolDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SchoolDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SchoolDataTableDataSource(this.paginator, this.sort);
  }
}
