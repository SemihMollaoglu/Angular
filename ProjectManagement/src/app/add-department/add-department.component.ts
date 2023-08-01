import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  constructor(private departmentService: DepartmentService) { }
  department: Department = new Department();

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log("Form değeri:", form.value);
      this.departmentService.addDepartment(this.department).subscribe(data => alert(data.name + " isimli departman eklendi."))
    } else {
      console.log("Form uygun değil");
    }
  }
}
