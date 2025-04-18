package com.example.StudentManagementSystem_test1.repository;

import com.example.StudentManagementSystem_test1.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

