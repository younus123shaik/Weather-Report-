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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.weather_server.Repository.WeatherDataRepository;
import com.example.weather_server.models.WeatherData;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("weatherdata")
public class WeatherDataController {
    @Autowired
    WeatherDataRepository weatherRepository;

    @PostMapping("/data")
    public String CreateUser(@RequestBody WeatherData data) {
        weatherRepository.save(data);
        return "Sucessfully Created";
    }

    @GetMapping("/data")
    public ResponseEntity<List<WeatherData>> GetAllData() {
        List<WeatherData> data = new ArrayList<>();
        weatherRepository.findAll().forEach(data::add);
        return new ResponseEntity<List<WeatherData>>(data, HttpStatus.OK);
    }

    @GetMapping("/data/{name}")
    public ResponseEntity<WeatherData> GetDataByName(@PathVariable String name) {
        Optional<WeatherData> data = weatherRepository.findById(name);
        if (data.isPresent()) {
            return new ResponseEntity<WeatherData>(data.get(), HttpStatus.FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/data/{name}")
    public String DeleteDataByName(@PathVariable String name) {
        weatherRepository.deleteById(name);
        return "Deleted Sucessfully";
    }

    @DeleteMapping("/data")
    public String DeleteAllData() {
        weatherRepository.deleteAll();
        return "Deleted Sucessfully";
    }
    @PutMapping("/data/{city}")
    public String UpdateDataByName(@PathVariable String city, @RequestBody WeatherData data) {
        Optional<WeatherData> data1= weatherRepository.findById(city);
        if(data1.isPresent()){
            WeatherData wd= data1.get();
            wd.setCity(data.getCity());
            wd.setTemperature(data.getTemperature());
            wd.setWeather(data.getWeather());
            wd.setWindspeed(data.getWindspeed());
            wd.setHumidity(data.getHumidity());
            weatherRepository.save(wd);
            return "Sucessfully Updated";
        }else{
            return "Data Not Found";
        }
    }
}
