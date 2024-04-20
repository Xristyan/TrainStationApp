package com.example.TrainStation.Controller;

import com.example.TrainStation.Model.FilterOptions;
import com.example.TrainStation.Model.StationConnection;
import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Service.ConnectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/connections")
@CrossOrigin
public class ConnectionsController {
    @Autowired
    private ConnectionsService connectionsService;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<StationConnection>> getAllStations( @RequestBody FilterOptions filterOptions)
    {
        return ResponseEntity.ok(connectionsService.filterConnections(filterOptions));
    }
}
