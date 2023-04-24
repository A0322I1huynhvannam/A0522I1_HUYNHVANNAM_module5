package com.example.be.service;

import com.example.be.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.Optional;

public interface IStudentService {
    Page<Student> findAllWithPage(PageRequest pageRequest, String tenSinhVien);
    void save(Student student);
    void delete(Long id);
    Optional<Student> findById(Long id);
}
