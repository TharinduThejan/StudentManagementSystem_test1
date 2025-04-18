package com.example.StudentManagementSystem_test1.service;

import com.example.StudentManagementSystem_test1.model.Student;
import com.example.StudentManagementSystem_test1.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {

        return repo.findAll();
    }

    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    public Student getStudentById(long id) {

        return repo.findById(id).orElse(null);
    }

    public void deleteStudent(long id) {

        repo.deleteById(id);
    }

}
