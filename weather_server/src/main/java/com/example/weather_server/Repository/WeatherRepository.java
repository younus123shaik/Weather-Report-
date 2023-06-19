package com.example.weather_server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.weather_server.models.UserData;

public interface WeatherRepository extends JpaRepository<UserData,String> {

    
    
}
