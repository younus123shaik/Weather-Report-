package com.example.weather_server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.weather_server.models.WeatherData;

public interface WeatherDataRepository extends JpaRepository<WeatherData,String> {
    
}
