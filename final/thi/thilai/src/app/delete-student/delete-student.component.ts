import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student: Student = {};
  id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.studentService.finByIdStudent(id).subscribe(data => {
          console.log(data);
          this.student = data;
          this.deleteCustomer();
        });
      }
    }, error => {
    }, () => {
    });
  }
  ngOnInit(): void {
  }

  deleteCustomer() {
    Swal.fire({
      title: 'Are you sure want to remove?' + this.student.tenSinhVien,
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(this.student.id).subscribe(next => {

        });
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        this.route.navigateByUrl('/students/list');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
        this.route.navigateByUrl('/students/list');
      }
    });}



}
