package com.example.TrainStation.Service;

import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Repository.TrainStationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TrainStationServiceImpl implements TrainStationService {

    @Autowired
    private TrainStationRepository trainStationRepository;

    @Override
    public List<TrainStation> getAllStations() {
        return trainStationRepository.findAll();
    }
}
