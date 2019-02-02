import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchooldataService {

  private schoolData = new BehaviorSubject([]);
  currentSchoolData = this.schoolData.asObservable();
  schools:any;


  constructor(private http: HttpClient) {
  this.getSchool().subscribe(async school => {
      this.schools = school;
      console.log(school);

    });
  }

  getSchool() {
    return this.http.get("http://127.0.0.1:5000/api/schooldata")
  }


  setSchoolData(data) {
    this.schoolData.next(data)
  }

  getSchoolByURN(URN): Observable<any> {
    return of(this.schools.find(School => School.URN === URN));

  }

}
