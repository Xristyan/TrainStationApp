package com.example.TrainStation.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilterOptions {

    private int stationFromId;

    private int stationToId;

    private LocalDateTime departureDateTime;

    private LocalDateTime arrivalDateTime;

    private TypeOfTravel typeOfTravel;

}
