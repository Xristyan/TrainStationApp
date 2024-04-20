package com.example.TrainStation.Service;

import com.example.TrainStation.Model.Museum;
import com.example.TrainStation.Repository.MuseumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MuseumServiceImpl implements MuseumService{

    @Autowired
    private MuseumRepository museumRepository;

    @Override
    public List<Museum> getAllMuseums() {
        return museumRepository.findAll();
    }
}
