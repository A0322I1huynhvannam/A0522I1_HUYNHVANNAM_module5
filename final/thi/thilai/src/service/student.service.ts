import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];
  private URL_API = 'http://localhost:3000/students/';

  constructor(private httpClient: HttpClient) {
  }
  addStudent(student: any): Observable<any> {
    return this.httpClient.post(this.URL_API, student);
  }

  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_API);
  }
  finByIdStudent(id: string): Observable<Student> {
    return this.httpClient.get<Student>(this.URL_API + id);
  }
  updateStudent(id: string, student: any): Observable<any> {
    return this.httpClient.put(this.URL_API + id, student);
  }
  deleteStudent(id: string): Observable<any> {
    return this.httpClient.delete(this.URL_API + id);
  }
  findByName(tenSinhVien:String):Observable<Student[]>{
    return this.httpClient.get<Student[]>('http://localhost:3000/students?studentName_like='+tenSinhVien);
  }
}
