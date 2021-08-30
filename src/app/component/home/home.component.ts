import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employeeCount: number = 10;
  public employeeDetails: Employee[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    private dataService: DataService
    ) {
  }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeDetails = response;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

  remove(employeeId: number): void {
    this.httpService.deleteEmployeeData(employeeId).subscribe(response=> console.log(response));
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add/' + employee.id)
  }

}
