import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

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
            id: new FormControl(this.student.id, [Validators.required]),
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
      id: new FormControl(this.student.id, [Validators.required]),
      tenSinhVien: new FormControl(this.student.tenSinhVien, [Validators.required]),
      tenNhom: new FormControl(this.student.tenNhom),
      tenDeTai: new FormControl(this.student.tenDeTai, [Validators.required]),
      giaoVienHuongDan: new FormControl(this.student.giaoVienHuongDan),
      email: new FormControl(this.student.email, [Validators.required, Validators.email]),
      soDienThoai: new FormControl(this.student.soDienThoai, [Validators.required, Validators.pattern('^([\\d]{10}|[\\d]{11})|[\\d]{12}')]),
    });
  }



  updateStudent() {
    if (this.studentForm.valid) {
      this.studentService.updateStudent(this.studentForm.value.id, this.studentForm.value).subscribe(next => {
        alert('Cập nhật thành công');
        this.router.navigate(['/students/list']);
      }, error => {
        alert('update fail');
      }, () => {
      });
    }
    }
}
