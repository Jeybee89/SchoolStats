import {Component, OnInit} from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {Chart} from "chart.js"

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  schools: any;
  public grafName = [];
  public grafValue = [];
  chart = [];

  constructor(private schoolService: SchooldataService) {
  }

  ngOnInit() {

    this.schoolService.getSchool().subscribe(async school => {
      this.schools = school;
      this.schoolService.setSchoolData(school);
      this.schools.forEach((value, i) => {
        let school = this.schools[i].SchoolName;
        let schoolIncome = Number(this.schools[i].TotalIncome.replace(/\,/g, ''));
        this.grafName.push(school);
        this.grafValue.push(schoolIncome);

      });
      this.chart = new Chart('canvas', {
        type: 'horizontalBar',
        data: {
          labels: this.grafName,
          datasets: [{
            label: 'Total Income',
            data: this.grafValue,
            backgroundColor:
              'rgba(0, 153, 51, 0.8)'
            ,
            borderWidth: 0
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })


    });

  }
}


