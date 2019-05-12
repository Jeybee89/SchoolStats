import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchooldataService {

  private schoolData = new BehaviorSubject([]);
  currentSchoolData = this.schoolData.asObservable();
  schools: any;


  constructor(private http: HttpClient) {

  }

  getSchool() {
    return this.http.get("https://schooldata.nickwebdev.com:5000/api/schooldata")
  }

  getSchoolById(id) {
    return this.http.get(`https://schooldata.nickwebdev.com:5000/api/schooldata/${id}`)
  }


  setSchoolData(data) {
    this.schoolData.next(data)
  }



}
