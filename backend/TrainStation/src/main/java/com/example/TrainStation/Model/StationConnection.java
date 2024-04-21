package com.example.TrainStation.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StationConnection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne // Many connections can originate from one station
    @JoinColumn(name = "fromStationId")
    @JsonIgnoreProperties({"connections"}) // Ignore recursive reference
    private TrainStation fromStation; // Reference to the "from" station

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "toStationId")
    @JsonIgnoreProperties({"connections", "fromStation"})
    private TrainStation toStation;

    private double distance;

    private LocalDateTime departureDateTime;

    private LocalDateTime arrivalDateTime;

    @Enumerated(EnumType.STRING)
    private TypeOfTravel typeOfTravel;

    @Transient
    private double price;

}
