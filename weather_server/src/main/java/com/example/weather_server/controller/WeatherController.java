package com.example.weather_server.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.weather_server.Repository.WeatherRepository;
import com.example.weather_server.models.UserData;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/Accounts")
public class WeatherController {
    @Autowired
    WeatherRepository weatherRepository;
    @PostMapping("/Users")
    public String CreateUser(@RequestBody UserData user){
        weatherRepository.save(user);
        return "Sucessfully Created";
    }
    @GetMapping("/Users")
    public ResponseEntity<List<UserData>> GetUsers(){
        List<UserData> users= new ArrayList<>();
        weatherRepository.findAll().forEach(users::add);
        return new ResponseEntity<List<UserData>>(users, HttpStatus.OK);
    }
    @GetMapping("/Users/{name}")
    public ResponseEntity<UserData> GetUserById(@PathVariable String name){
        Optional<UserData> user=weatherRepository.findById(name);
        if(user.isPresent()){
            return new ResponseEntity<UserData>(user.get(),HttpStatus.FOUND);
        }
        else{
            return new ResponseEntity<UserData>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/Users/{name}")
    public String DeleteUserById(@PathVariable String name){
        weatherRepository.deleteById(name);
        return "User is Successfully Deleted";
    }
    
    
}
