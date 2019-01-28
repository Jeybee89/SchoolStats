import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {SchooldataService} from "../../services/schooldata.service";
import {School} from "../../model/school";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table-of-schools',
  templateUrl: './table-of-schools.component.html',
  styleUrls: ['./table-of-schools.component.scss']
})

export class TableOfSchoolsComponent implements OnInit {

  schoolData: any;


  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource();

  constructor(private schoolService: SchooldataService) {


  }

  ngOnInit() {
    this.schoolService.getSchool().subscribe(res => {
      this.dataSource.data = new Array(res);
      console.log(this.dataSource.data);
    });
    this.dataSource.sort = this.sort;
  }


}

