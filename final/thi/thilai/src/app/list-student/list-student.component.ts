import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  p = 2;
  mess: string;
  students: Student[] = [];
  Search: FormGroup = new FormGroup({name: new FormControl()});

  constructor(private studentService: StudentService) {
    this.studentService.getAllStudent().subscribe(next => {
      console.log(next);
      this.students = next;
    });
  }
  ngOnInit(): void {
  }

  submit() {
    if (this.Search.valid) {
      if (this.Search.value.name == null) {
        return this.students
      } else {
        this.studentService.findByName(this.Search.value.name).subscribe(next => {
          if (next.length != 0) {
            this.students = next;
            this.mess = null;
          } else {
            this.mess = "Not found by " + this.Search.value.name;
            this.students = []
          }
        })
      }
    }
  }
}
