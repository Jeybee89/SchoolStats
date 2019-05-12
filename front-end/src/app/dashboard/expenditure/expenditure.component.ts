import {Component, OnInit} from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {Chart} from "chart.js"

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {

  public schools: any;
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
        let schoolExp = Number(this.schools[i].TotalExpenditure.replace(/\,/g, ''));
        this.grafName.push(school);
        this.grafValue.push(schoolExp);

      });
      this.chart = new Chart('canvas', {
        type: 'horizontalBar',
        data: {
          labels: this.grafName,
          datasets: [{
            label: 'Total Expenditure',
            data: this.grafValue,
            backgroundColor:
              'rgba(255, 0, 0, 0.8)'
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
