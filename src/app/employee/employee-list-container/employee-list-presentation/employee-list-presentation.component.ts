import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../employee-model';
import { EmployeeService } from '../../employee.service';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';


@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class EmployeeListPresentationComponent implements OnInit{
  searchText!: string;
  @ViewChild('Form') 
  Form!: NgForm;
  Food : Employee[] = [];
  selectedEmp!: Employee[];
  msg!: string;
	clss!: string;
  employees:Employee[]=[];
  page!:Observable<any>


  curPage!: number;
  pageSize!: number;

  public  reverse!: boolean;
  public orderType!: string;
  public key!: string;

  selectedItemsList!: Employee[];
  checkedIDs:any

  @Output() public search: EventEmitter<any>=new EventEmitter();
  @Output() public sort: EventEmitter<any>=new EventEmitter();


  @Input() public set employeedetailList(id: Employee[]){
    if(id){
      this._employeedetailList= id
    }
  }

  public get employeedetailList(): Employee[] {
    return this._employeedetailList
  }
  private _employeedetailList: Employee[] = [];


  constructor( private api : EmployeeService,private empPresenter:EmployeeListPresenterService) { 
    this.api.getBank().subscribe((emp:any) => {this.employees = emp; console.log(this.employees) }  )
    this.curPage = 1;
    this.pageSize = 3; 
  }


ngOnInit():void
{
  this.api.getBank().subscribe((emp:any) => {this.employees = emp; console.log(this.employees) }  )
} 
  //method for deletion of multiple records
  deleteEmpSelected(){
    if(window.confirm('Are sure you want to delete selected items ?')){
      this.selectedEmp= this.employees.filter(_ => _.selected);
        for (var employeedetail in this.selectedEmp) {
       this.api.Remove(this.selectedEmp[employeedetail].id)
         .subscribe(data=>{
          console.log(data)
         }   
         )  
    }
      
      }
}
checkbox(employeedetail: any) {
  employeedetail.selected= (employeedetail.selected) ? true: false;
  this.selectedEmp = employeedetail;
}

// getPage(pageno: number) {
//   this.page = this.api.getPagination(pageno);
// }

// onPageChange(pageno: number) {
//   this.getPage(pageno);
// }
numberOfPages() {
  return Math.ceil(this.employees.length / this.pageSize);
};
//method to return numberofpages

}
