import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
      name:'employeeGender'
})

export class EmployeePipe implements PipeTransform{
      transform(value:string, gender:string):string{
            if(gender=='male'){
                  return "M"
            }
            else{
                  return "F"
            }
      }
}