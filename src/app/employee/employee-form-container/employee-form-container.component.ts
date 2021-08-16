import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.scss']
})
export class EmployeeFormContainerComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  public employeeDataById$: Observable<any> = of();

  constructor( private api:EmployeeService, private actRoute: ActivatedRoute) {
    this.employeeDataById$ = this.api.getUserData(this.id)
    
   }

  ngOnInit(): void {
  }
  public addEmployee(userData: any) {
    if (this.id) {
      this.api.putUserData(this.id, userData).subscribe(res=>{
        alert('Updated')
      });
    } else {
      this.api.addEmployee(userData).subscribe(res=>{
        alert('Added')
      });
    }
  }
}
//Api call to add and update employee