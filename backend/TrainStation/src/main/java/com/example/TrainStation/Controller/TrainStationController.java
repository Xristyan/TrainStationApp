package com.example.TrainStation.Controller;


import com.example.TrainStation.Model.Museum;
import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Service.MuseumService;
import com.example.TrainStation.Service.TrainStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainStations")
@CrossOrigin
public class TrainStationController {

    @Autowired
    private TrainStationService trainStationService;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<TrainStation>> getAllStations()
    {
        return ResponseEntity.ok(trainStationService.getAllStations());
    }
}
