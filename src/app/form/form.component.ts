import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { Student } from '../student.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [StudentService]
})
export class FormComponent implements OnInit {

  form=[];
  constructor(private studentService: StudentService) 
  { }

  submitted: boolean;
  showSuccessMessage: boolean;
  

  ngOnInit() {
    this.resetForm();
    this.refreshStudentList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.studentService.selectedStudent = {
      _id: "",
      fullName: "",
      email: "",
      mobile:" ",
      location: " "
    }
  }

  refreshStudentList() {
    this.studentService.getEmployeeList().subscribe((res) => {
      this.studentService.students = res as Student[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.studentService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList();
      
      });
    }
    else {
      this.studentService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList();
        
      });
    }
  }
}
