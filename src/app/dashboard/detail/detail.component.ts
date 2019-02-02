import {Component, OnInit} from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public school: any;
  private schoolID: any;

  constructor(private schoolService: SchooldataService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param => {
       let id = param.get('id');
        console.log(id);
        this.schoolService.getSchoolById(id)
          .subscribe( res => {
            this.school = res;
          });


      });

  }

  // getSchool(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.schoolService.getSchoolByURN(id)
  //     .subscribe(school => this.schools = school);
  //     console.log(this.schools);
  // }
}
