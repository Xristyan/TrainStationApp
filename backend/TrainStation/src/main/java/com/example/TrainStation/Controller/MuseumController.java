package com.example.TrainStation.Controller;

import com.example.TrainStation.Model.Museum;
import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Service.MuseumService;
import com.example.TrainStation.Service.TrainStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/museum")
@CrossOrigin
public class MuseumController {

    @Autowired
    private MuseumService museumService;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Museum>> getAllStations()
    {
        return ResponseEntity.ok(museumService.getAllMuseums());
    }
}
