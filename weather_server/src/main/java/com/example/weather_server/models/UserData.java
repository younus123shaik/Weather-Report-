package com.example.weather_server.models;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class UserData {
    @Id
    
    
    private String name;
    private String email;
    private String password;
    
    
    public UserData(String name, String email, String password) {
        
        this.name = name;
        this.email = email;
        this.password = password;
    }

   
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public UserData() {
    }

    @Override
    public String toString() {
        return "UserData [name=" + name + ", email=" + email + ", password=" + password + "]";
    }

    
}
