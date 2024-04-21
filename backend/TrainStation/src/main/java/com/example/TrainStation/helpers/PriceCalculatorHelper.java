package com.example.TrainStation.helpers;

import com.example.TrainStation.Model.StationConnection;

import java.time.LocalTime;
import java.util.List;

public  class PriceCalculatorHelper {

    public static List<StationConnection> calculateTicketsPrice(List<StationConnection> connections){
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
