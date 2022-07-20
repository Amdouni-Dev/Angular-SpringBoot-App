import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees?:Employee[];
  ch :String="";
  constructor(private employeeService: EmployeeService) {

  }


  ngOnInit() {
    this.reloadData();
  }
  
  reloadData() {
   

    this.employeeService.getAll()
      .subscribe(
        data => {
       


          this.employees = data;
      
       
          console.log(data);


        },
        error => {
          console.log("*******************************************************");
          console.log(error);

        });  }
}
