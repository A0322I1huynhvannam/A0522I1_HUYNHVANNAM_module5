package com.example.be.controller;

import com.example.be.model.Student;
import com.example.be.service.Impl.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class StudentRestController {
    @Autowired
    private StudentServiceImpl studentService;

    @GetMapping("/students")
    public ResponseEntity<Page<Student>> findAllWithPage(@RequestParam(defaultValue = "0") int page, @RequestParam String tenSinhVien) {
        Page<Student> list = studentService.findAllWithPage( PageRequest.of(page, 2), tenSinhVien);
        return ResponseEntity.of(java.util.Optional.ofNullable(list));
    }

    @PostMapping("/students/save")
    public ResponseEntity<?> save(@RequestBody Student student) {
        studentService.save(student);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    @GetMapping("/students/find/{id}")
    public ResponseEntity<Student> findById(@PathVariable Long id){
        Optional<Student> student=studentService.findById(id);
        return ResponseEntity.of(student);
    }
    @PutMapping("/students/save")
    public ResponseEntity<?> update(@RequestBody Student student) {
        studentService.save(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/students/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        studentService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
