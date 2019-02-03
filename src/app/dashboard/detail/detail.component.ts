import {Component, OnInit} from '@angular/core';
import {SchooldataService} from "../../services/schooldata.service";
import {ActivatedRoute} from "@angular/router";
import {Chart} from "chart.js"


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public school: any;

  public doughnutChartLabels = ['SEN Funding', 'Additional Grant For Schools', 'Community Focused School Facilities Income',
    'Community Focussed School Funding And/Or Grants', 'Direct Revenue Financing', 'Donations And/Or Private Funds', 'Funding For 6th Form Students',
      'Funding For Minorit Ethnic Pupils', 'Funds Delegated By The LA', 'Income From Catering', 'Income From Contributions To Visits',
      'Other Government Grants', 'Other Grants And Payments'];
  public doughnutChartData: any = [];
  public doughnutChartType = 'doughnut';

  constructor(private schoolService: SchooldataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param => {
        let id = param.get('id');
        this.schoolService.getSchoolById(id)
          .subscribe(res => {
            this.school = res;
            this.doughnutChartData.push(Number(this.school[0].SENFunding.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].AdditionalGrantForSchools.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].CommunityFocusedSchoolFacilitiesIncome.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].CommunityFocussedSchoolFundingAndOrGrants.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].DirectRevenueFinancing.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].DonationsAndOrPrivateFunds.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].FundingFor6thFormStudents.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].FundingForMinoritEthnicPupils.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].FundsDelegatedByTheLA.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].IncomeFromCatering.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].IncomeFromContributionsToVisits.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].OtherGovernmentGrants.replace(/\,/g, '')));
            this.doughnutChartData.push(Number(this.school[0].OtherGrantsAndPayments.replace(/\,/g, '')));
          });


      });


  };

}
