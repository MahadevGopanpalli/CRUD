import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Student} from './student.model'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class StudentService 
{
 selectedStudent: Student;
  students: Student[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Student) {
    console.log(emp._id)
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Student) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
/*
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  private _data = "http://localhost:3000/api/data";
  private _del= "http://localhost:3000/api/del" //
 // private _info= "http://localhost:3000/api/data";
  
  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    location: new FormControl('')
  });


  getStudents() 
  {
   return this.http.get<any>(this._data);
  }

  insertStudent(student) 
  {
    console.log(student.$key);
   return this.http.post<any>(this._data,student);
  }

  /* populateForm(student) 
  {
    this.form.setValue(student);
  }

 updateStudent(student) 
  {
    this.studentList.update(student.$key,
      {
        fullName: student.fullName,
        email: student.email,
        mobile: student.mobile,
        location: student.location
      });
  }

  deleteStudent($key) 
  { console.log($key);
this.http.delete(this._del,$key);
  }
}
*/
