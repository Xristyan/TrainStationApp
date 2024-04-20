package com.example.TrainStation.Service;

import com.example.TrainStation.Model.FilterOptions;
import com.example.TrainStation.Model.StationConnection;
import com.example.TrainStation.Repository.ConnectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionsServiceImpl implements ConnectionsService {
    @Autowired
    private ConnectionsRepository connectionsRepository;

    @Override
    public List<StationConnection> filterConnections(FilterOptions filterOptions) {
//       return connectionsRepository.findAll();
        return connectionsRepository.findByFilterOptions(
                filterOptions.getStationFromName(),
                filterOptions.getStationToName(),
                filterOptions.getDepartureDateTime(),
                filterOptions.getArrivalDateTime(),
                filterOptions.getTypeOfTravel()
        );
    }
}
