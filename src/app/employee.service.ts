import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
const baseUrl = 'http://localhost:5000/api/v1/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }
}
