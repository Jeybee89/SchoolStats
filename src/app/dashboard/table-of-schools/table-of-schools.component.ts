import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {SchooldataService} from "../../services/schooldata.service";

@Component({
  selector: 'app-table-of-schools',
  templateUrl: './table-of-schools.component.html',
  styleUrls: ['./table-of-schools.component.scss']
})

export class TableOfSchoolsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  schoolData = {};

@ViewChild(MatSort) sort: MatSort;

  constructor(private schoolService: SchooldataService) {


  }

  ngOnInit() {
    this.schoolService.getSchool().subscribe(res => {
      this.schoolData = res
    });
    this.dataSource.sort = this.sort;
  }


}
let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
