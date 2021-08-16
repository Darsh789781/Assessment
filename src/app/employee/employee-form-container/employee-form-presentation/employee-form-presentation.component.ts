import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../employee-model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[EmployeeFormPresenterService]

})
export class EmployeeFormPresentationComponent implements OnInit {
  
  private _employeeIdData: Employee[] = [];

  @Input() public set employeeDataById(id: Employee[]){
    if(id){
      this._employeeIdData = id
    }
    this.employeeForm.patchValue(this.employeeDataById)
  }

  public get employeeDataById(): Employee[] {
    return this._employeeIdData
  }
  @Output() employeeDetailData = new EventEmitter();

  constructor( private employeePresenter:EmployeeFormPresenterService) {
                this.employeeDataById = []
   }

  public employeeForm:FormGroup = this.employeePresenter.bindForm();


  ngOnInit(): void {
    this.employeePresenter.employeedetailData$.subscribe((res:any)=>{
        this.employeeDetailData.emit(res)
    })
  }

  public onSubmit() {
    this.employeePresenter.employeedetail(this.employeeForm) 
  }

  
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
 //date picker and also disabled future dates
}
