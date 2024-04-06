package com.example.TrainStation.Repository;

import com.example.TrainStation.Model.TrainStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainStationRepository extends JpaRepository<TrainStation,Integer> {
}
