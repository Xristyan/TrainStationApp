package com.example.TrainStation.Service;

import com.example.TrainStation.Model.FilterOptions;
import com.example.TrainStation.Model.StationConnection;
import com.example.TrainStation.Repository.ConnectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class ConnectionsServiceImpl implements ConnectionsService {
    @Autowired
    private ConnectionsRepository connectionsRepository;

    @Override
    public List<StationConnection> filterConnections(FilterOptions filterOptions) {
        List<StationConnection> connections = connectionsRepository.findByFilterOptions(
                filterOptions.getStationFromName(),
                filterOptions.getStationToName(),
                filterOptions.getDepartureDateTime(),
                filterOptions.getArrivalDateTime(),
                filterOptions.getTypeOfTravel()
        );

        // Apply pricing logic to each connection
        for (StationConnection connection : connections) {
            // Get the distance of the connection
            double distance = connection.getDistance();

            // Calculate the base price
            double basePrice = Math.ceil(distance / 10) * 1;

            // Get the departure time of the connection
            LocalTime departureTime = connection.getDepartureDateTime().toLocalTime();

            // Define peak time periods
            LocalTime peakStartTimeMorning = LocalTime.of(7, 30);
            LocalTime peakEndTimeMorning = LocalTime.of(9, 30);
            LocalTime peakStartTimeAfternoon = LocalTime.of(16, 0);
            LocalTime peakEndTimeAfternoon = LocalTime.of(19, 30);

            // Check if the departure time falls within peak hours
            if ((departureTime.isAfter(peakStartTimeMorning) && departureTime.isBefore(peakEndTimeMorning))
                    || (departureTime.isAfter(peakStartTimeAfternoon) && departureTime.isBefore(peakEndTimeAfternoon))) {
                // Full price
                connection.setPrice(basePrice);
            } else {
                // Apply discount
                double discountedPrice = basePrice * 0.95; // 5% discount
                connection.setPrice(discountedPrice);
            }
        }
        return connections;
    }
}
