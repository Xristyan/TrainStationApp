package com.example.TrainStation.Controller;

import com.example.TrainStation.Model.Fields;
import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Service.FieldsService;
import com.example.TrainStation.Service.TrainStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/fields")
@CrossOrigin
public class FieldsController {

    @Autowired
    private FieldsService fieldsService;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<Fields> getSearchFields()
    {
        return ResponseEntity.ok(fieldsService.getSearchFields());
    }
}
