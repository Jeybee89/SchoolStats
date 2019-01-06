import {Component, Input, OnInit} from '@angular/core';
import {SchooldataService} from "../services/schooldata.service";
import { Chart } from "chart.js"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  schools: any;
  public grafName = [];
  public grafValue = [];
  chart = [];


  constructor(private schoolService: SchooldataService) {



  }


  ngOnInit() {
    this.schoolService.getSchool().subscribe(async school => {
      this.schools = school;
      this.schoolService.schoolDetail = this.schools;
      this.schools.forEach((value, i) => {
        let school = this.schools[i].SchoolName;
        let schoolIncome = Number(this.schools[i].TotalIncome.replace(/\,/g,''));
        this.grafName.push(school);
        this.grafValue.push(schoolIncome);

      });
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
        labels: this.grafName,
        datasets: [{
            label: 'Total Income',
            data: this.grafValue,
            backgroundColor:
                'rgba(255, 99, 132, 0.8)'
            ,
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
      } )
    });

  }



}

