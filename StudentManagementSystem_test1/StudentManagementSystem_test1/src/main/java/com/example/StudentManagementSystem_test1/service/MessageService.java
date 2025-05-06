package com.example.StudentManagementSystem_test1.service;

import com.example.StudentManagementSystem_test1.model.Message;
import com.example.StudentManagementSystem_test1.repository.MessagesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessagesRepo repoMsg;
    public List<Message> getAllMessages(){
        return repoMsg.findAll();
    }
    public Message saveMessage(Message announcement){
        return repoMsg.save(announcement);
    }
    public void deleteMessage(long id) {
        repoMsg.deleteById(id);
    }

}
