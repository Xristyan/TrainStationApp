package com.example.TrainStation.Repository;


import com.example.TrainStation.Model.StationConnection;
import com.example.TrainStation.Model.TypeOfTravel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConnectionsRepository extends JpaRepository<StationConnection,Integer> {

    @Query("SELECT sc FROM StationConnection sc " +
            "WHERE (:stationFromName IS NULL OR sc.fromStation.name = :stationFromName) " +
            "AND (:stationToName IS NULL OR sc.toStation.name = :stationToName) " +
            "AND (:departureDateTime IS NULL OR sc.departureDateTime >= :departureDateTime) " +
            "AND (:arrivalDateTime IS NULL OR sc.arrivalDateTime <= :arrivalDateTime) " +
            "AND (:typeOfTravel IS NULL OR sc.typeOfTravel = :typeOfTravel)")
    List<StationConnection> findByFilterOptions(@Param("stationFromName") String stationFromName,
                                                @Param("stationToName") String stationToName,
                                                @Param("departureDateTime") LocalDateTime departureDateTime,
                                                @Param("arrivalDateTime") LocalDateTime arrivalDateTime,
                                                @Param("typeOfTravel") TypeOfTravel typeOfTravel);
}
