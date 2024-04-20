package com.example.TrainStation.Service;

import com.example.TrainStation.Model.Fields;
import com.example.TrainStation.Model.TrainStation;
import com.example.TrainStation.Model.TypeOfTravel;
import com.example.TrainStation.Repository.TrainStationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FieldsServiceImpl implements FieldsService{

    @Autowired
    private TrainStationRepository trainStationRepository;

    @Override
    public Fields getSearchFields() {
        List<String> stationNames = trainStationRepository.findAll()
                .stream()
                .map(TrainStation::getName)
                .collect(Collectors.toList());

        List<String> travelTypes = Arrays.stream(TypeOfTravel.values())
                .map(Enum::name)
                .collect(Collectors.toList());

        return Fields.builder()
                .stations(stationNames)
                .typesOfTravel(travelTypes)
                .build();
    }
}
