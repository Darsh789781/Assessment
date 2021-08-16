import { Injectable } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EmployeeFormPresenterService {
  public employeedetailData: Subject<any> = new Subject();
  public employeedetailData$: Observable<any>;

  constructor(private fb:FormBuilder) {
    this.employeedetailData$ = this.employeedetailData.asObservable();
   }
   public bindForm(): FormGroup {
    return this.fb.group({
      firstname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      
      lastname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      department: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],

      birthdate:[''],
      gender: ['',Validators.required],      
      enable:['']
            
    })
  }
  //creation of employee form
  public employeedetail(employeedetailForm: FormGroup) {
    if (employeedetailForm.valid) {
      this.employeedetailData.next(employeedetailForm.value);
    } 
  }
}

