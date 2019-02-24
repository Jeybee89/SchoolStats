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

  public douhnutChartLebelsEx = ['Administrative And Clerical Staff', 'Administrative Supplies', 'Bought In Professional Services',
    'Bought In Professional Services 2', 'Catering Supplies', 'Cleaning And Caretaking', 'Community Focused School Costs', 'Community Focused School Staff',
    'Cost Of Other Staff', 'Development And Training', 'Education Support Staff', 'Energy', 'Grounds Maintenance And Improvement', 'ICT Learning Resources',
    'Indirect Employee Expenses', 'Learning Resources', 'Premises Staff', 'Staff Related Insurance', 'Supply Teaching Staff', 'Teaching Staff', 'Water And Sewerage'];
  public doughnutChartDataEx: any = [];
  public doughnutChartData: any = [];
  public doughnutChartTypeEx = 'doughnut';
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
            // Income
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


            //  Expenditure

            this.doughnutChartDataEx.push(Number(this.school[0].AdministrativeAndClericalStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].AdministrativeSupplies.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].BoughtInProfessionalServices.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].BoughtInProfessionalServices2.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].CateringSupplies.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].CleaningAndCaretaking.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].CommunityFocusedSchoolCosts.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].CommunityFocusedSchoolStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].CostOfOtherStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].DevelopmentAndTraining.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].EducationSupportStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].Energy.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].GroundsMaintenanceAndImprovement.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].ICTLearningResources.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].IndirectEmployeeExpenses.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].LearningResources.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].PremisesStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].StaffERelatedInsurance.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].SupplyTeachingStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].TeachingStaff.replace(/\,/g, '')));
            this.doughnutChartDataEx.push(Number(this.school[0].WaterAndSewerage.replace(/\,/g, '')));

          });


      });


  };

}
