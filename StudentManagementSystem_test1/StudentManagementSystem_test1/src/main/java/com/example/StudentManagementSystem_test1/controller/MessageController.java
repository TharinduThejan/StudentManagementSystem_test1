package com.example.StudentManagementSystem_test1.controller;

import com.example.StudentManagementSystem_test1.model.Message;
import com.example.StudentManagementSystem_test1.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Messages")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {
    @Autowired
    private MessageService messageService;
    @GetMapping
    public List<Message> getMessages() {
        return messageService.getAllMessages();
    }
    @PostMapping
    public Message addMessage(@RequestBody Message message) {
        return messageService.saveMessage(message);
    }
    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);

    }
}
