package com.example.TrainStation.Service;

import com.example.TrainStation.Model.FilterOptions;
import com.example.TrainStation.Model.StationConnection;

import java.util.List;

public interface ConnectionsService {

    public List<StationConnection> filterConnections(FilterOptions filterOptions);
}
