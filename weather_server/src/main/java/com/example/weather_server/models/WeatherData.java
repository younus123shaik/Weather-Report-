package com.example.weather_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class WeatherData {
    @Id
    private String city;
    private String temperature;
    private String humidity;
    private String weather;
    private int windspeed;
    public WeatherData(String city, String temperature, String humidity, String weather, int windspeed) {
        this.city = city;
        this.temperature = temperature;
        this.humidity = humidity;
        this.weather = weather;
        this.windspeed = windspeed;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getTemperature() {
        return temperature;
    }
    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }
    public String getHumidity() {
        return humidity;
    }
    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }
    public String getWeather() {
        return weather;
    }
    public void setWeather(String weather) {
        this.weather = weather;
    }
    public int getWindspeed() {
        return windspeed;
    }
    public void setWindspeed(int windspeed) {
        this.windspeed = windspeed;
    }
    @Override
    public String toString() {
        return "WeatherData [city=" + city + ", temperature=" + temperature + ", humidity=" + humidity + ", weather="
                + weather + ", windspeed=" + windspeed + "]";
    }
    public WeatherData() {
    }
    
}
