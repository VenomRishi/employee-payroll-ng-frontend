import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8089";

  constructor(private httpClient: HttpClient) {
    
  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/getEmployee");
  }

  addEmployeeData(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/addEmployee", body);
  }

  deleteEmployeeData(employeeId: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/deleteEmployee", 
    {
      headers: new HttpHeaders(),
      params: new HttpParams().append('id', employeeId)
    })
  }

}
