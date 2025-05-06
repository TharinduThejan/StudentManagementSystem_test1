package com.example.StudentManagementSystem_test1.repository;

import com.example.StudentManagementSystem_test1.model.Message;
import com.example.StudentManagementSystem_test1.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessagesRepo extends JpaRepository<Message, Long> {
}
