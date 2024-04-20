package com.example.TrainStation.Repository;

import com.example.TrainStation.Model.Museum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuseumRepository extends JpaRepository<Museum,Integer> {
}
