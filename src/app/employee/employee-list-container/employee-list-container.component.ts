import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss']
})
export class EmployeeListContainerComponent implements OnInit {

  public employeedetailList$ : Observable<any> = of();
  public search!: string;


  public orderAs!: string;
  public fieldName!: string;
 //get users
  constructor(private api:EmployeeService) {
    
    this.employeedetailList$ = this.api.getUsers();

   }

  ngOnInit(): void {
  }
  
  

}
