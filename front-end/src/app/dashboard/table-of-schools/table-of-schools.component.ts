import {Component, OnInit} from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-table-of-schools',
  templateUrl: './table-of-schools.component.html',
  styleUrls: ['./table-of-schools.component.scss']
})

export class TableOfSchoolsComponent implements OnInit {

  schoolData: any;



  constructor(private schoolService: SchooldataService, private router: Router) {


  }

  ngOnInit() {
    this.schoolService.getSchool().subscribe(async school => {
      this.schoolData = school;
    this.schoolService.setSchoolData(school);
    });
  }

  getDetail(id) {
    this.router.navigate(['detail', id]);
  }


}

