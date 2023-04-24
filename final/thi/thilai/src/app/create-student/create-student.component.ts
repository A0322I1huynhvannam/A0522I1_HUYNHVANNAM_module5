import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm: FormGroup;
  student: Student;
  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.studentService.finByIdStudent(id).subscribe(data => {
          console.log(data);
          this.student = data;
          this.studentForm = new FormGroup({
            id: new FormControl( [Validators.required]),
            tenSinhVien: new FormControl(this.student.tenSinhVien, [Validators.required]),
            tenNhom: new FormControl(this.student.tenNhom),
            tenDeTai: new FormControl(this.student.tenDeTai, [Validators.required]),
            giaoVienHuongDan: new FormControl(this.student.giaoVienHuongDan),
            email: new FormControl(this.student.email, [Validators.required, Validators.email]),
            soDienThoai: new FormControl(this.student.soDienThoai, [Validators.required, Validators.pattern('^([\\d]{10}|[\\d]{11}|[\\d]{12})')]),
          });
        });
      }
    }, error => {
    }, () => {
    });
  }


  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(),
      tenSinhVien: new FormControl('', [Validators.required]),
      tenNhom: new FormControl(''),
      tenDeTai: new FormControl('', [Validators.required]),
      giaoVienHuongDan: new FormControl(''),
      email: new FormControl( '',[Validators.required, Validators.email]),
      soDienThoai: new FormControl('', [Validators.required, Validators.pattern('^([\\d]{10}|[\\d]{11})|[\\d]{12}')]),
    });
  }



  submitStudents() {
    console.log(this.studentForm);
    if(this.studentForm.valid){
      this.studentService.addStudent(this.studentForm.value).subscribe(next => {
          console.log(next)
          this.router.navigateByUrl("/students/list");
        }, error => {
          console.log("Error fail")
        },
        () => {
        });
    } else {
    }
  }
}
