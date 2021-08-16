import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL = 'http://localhost:3000/employee';

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL);
  }
  getBank(){
    return this.http.get<any>("http://localhost:3000/employee/")
    .pipe(map((res:any)=>{
      return res
    }))
  }
  getSearch(search: string):Observable<any>{
    
    return this.http.get<any>(this.apiURL+'?q='+search)
  }

  public addEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, data);
  }
  public getUserData(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/' + id);
  }
  public putUserData(
    id: number,
    data: Employee
  ): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/' + id, data);
  }
  // public deleteUser(id: number) {
  //   return this.http.delete<Employee>(this.apiURL + '/' + id);
  // }
  // deleteEmp(ids: number[]) {
	//   if (confirm("Are you sure to delete?")) {
	// 	const data = {'ids' : ids};
	// 	const url = `${this.apiURL}/delete/employee`;
	// 	const options = {
	// 		headers: new HttpHeaders({
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		}),
	// 		responseType: 'text' as 'json'
	// 	};
		
	// 	const resp = this.http.post<any>(url, data, options);//.map(resp => {return resp;}).catch(err => {console.log(err);});
		
	// 	//console.log('resp: ' + resp);
		
	// 	return resp;
	//   }
	  
	//   return of({});
    
  // }
  getProducts(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }
  Remove(id:number){
    return this.http.delete<any>("http://localhost:3000/employee/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
}
getPagination(pageno: number): Observable<any> {
  return this.http.get(
    "http://localhost:3000/employee/?page=" + pageno + '&limit=2'
  );
  
}


}
