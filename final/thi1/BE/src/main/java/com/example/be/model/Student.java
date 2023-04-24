package com.example.be.model;

import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tenSinhVien;
    private String tenNhom;
    private String tenDeTai;
    private String giaoVienHuongDan;

    private String email;
    private String soDienThoai;

    public Student() {
    }

    public Student(Long id, String tenSinhVien, String tenNhom, String tenDeTai, String giaoVienHuongDan, String email, String soDienThoai) {
        this.id = id;
        this.tenSinhVien = tenSinhVien;
        this.tenNhom = tenNhom;
        this.tenDeTai = tenDeTai;
        this.giaoVienHuongDan = giaoVienHuongDan;
        this.email = email;
        this.soDienThoai = soDienThoai;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenSinhVien() {
        return tenSinhVien;
    }

    public void setTenSinhVien(String tenSinhVien) {
        this.tenSinhVien = tenSinhVien;
    }

    public String getTenDeTai() {
        return tenDeTai;
    }

    public void setTenDeTai(String tenDeTai) {
        this.tenDeTai = tenDeTai;
    }

    public String getGiaoVienHuongDan() {
        return giaoVienHuongDan;
    }

    public void setGiaoVienHuongDan(String giaoVienHuongDan) {
        this.giaoVienHuongDan = giaoVienHuongDan;
    }

    public String getTenNhom() {
        return tenNhom;
    }

    public void setTenNhom(String tenNhom) {
        this.tenNhom = tenNhom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }
}
