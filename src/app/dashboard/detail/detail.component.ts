import { Component, OnInit } from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public schools: any;

  constructor(private schoolService: SchooldataService,private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {

    this.getSchool();
  }

  getSchool(): void {
  const id = +this.route.snapshot.paramMap.get('URN');
  this.schoolService.getSchoolByURN(id)
    .subscribe(school => this.schools = school);
}
}
