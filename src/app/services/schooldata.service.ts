import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchooldataService {

  private _schoolDetail: any;

  constructor(private http: HttpClient) { }

  getSchool() {
    return this.http.get("http://127.0.0.1:5000/api/schooldata")
  }

  get schoolDetail(): any {
    return this._schoolDetail;
  }

  set schoolDetail(value: any) {
    this._schoolDetail = value;
  }

}
