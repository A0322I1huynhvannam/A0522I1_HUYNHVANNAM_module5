package com.example.be.repository;

import com.example.be.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IStudentRepository extends JpaRepository<Student,Long> {
    @Query(value = "select * from Student where tenSinhVien like %:tenSinhVien% or '%' ;", nativeQuery = true,
            countQuery = "select * from Student where tenSinhVien like %:tenSinhVien% or '%';")
    Page<Student> findAllWithPage(Pageable pageable, @Param("tenSinhVien") String tenSinhVien);
}
