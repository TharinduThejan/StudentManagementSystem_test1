package com.example.StudentManagementSystem_test1;

import com.example.StudentManagementSystem_test1.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentManagementSystemTest1Application implements CommandLineRunner {

	@Autowired
	private StudentRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementSystemTest1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// You can test repository actions here
		// e.g., repository.save(new Student(...));
		System.out.println("Student Management System started successfully!");
	}
}
