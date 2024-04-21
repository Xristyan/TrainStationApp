package com.example.TrainStation;
import com.example.TrainStation.Model.StationConnection;
import com.example.TrainStation.helpers.PriceCalculatorHelper;
import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TrainStationApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void testCalculateTicketsPrice_PeakHours() {
		// Create a mock StationConnection
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(20.0); // Set distance
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 8, 0)); // Set departure time

		// Create a list of connections
		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		// Call the method to test
		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		// Assert the result
		assertEquals(2.0, result.get(0).getPrice()); // Expected price for peak hours: 20/10 * 1 = 2.0
	}

	@Test
	public void testCalculateTicketsPrice_OffPeakHours() {
		// Create a mock StationConnection
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(20.0); // Set distance
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 12, 0)); // Set departure time

		// Create a list of connections
		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		// Call the method to test
		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		// Assert the result
		assertEquals(1.9, result.get(0).getPrice()); // Expected discounted price for off-peak hours: 20/10 * 1 * 0.95 = 1.9
	}

	@Test
	public void testCalculateTicketsPrice_PeakHours_Morning() {
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(15.0);
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 8, 0));

		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(2.0, result.get(0).getPrice());
	}

	@Test
	public void testCalculateTicketsPrice_PeakHours_Afternoon() {
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(25.0);
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 18, 0));

		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(3.0, result.get(0).getPrice());
	}

	@Test
	public void testCalculateTicketsPrice_OffPeakHours_EarlyMorning() {
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(20.0);
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 6, 0));

		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(1.9, result.get(0).getPrice());
	}

	@Test
	public void testCalculateTicketsPrice_OffPeakHours_Evening() {
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(30.0);
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 20, 0));

		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(4.5, result.get(0).getPrice());
	}

	@Test
	public void testCalculateTicketsPrice_ZeroDistance() {
		StationConnection connection = mock(StationConnection.class);
		when(connection.getDistance()).thenReturn(0.0);
		when(connection.getDepartureDateTime()).thenReturn(LocalDateTime.of(2024, 4, 21, 12, 0));

		List<StationConnection> connections = new ArrayList<>();
		connections.add(connection);

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(0.0, result.get(0).getPrice());
	}

	@Test
	public void testCalculateTicketsPrice_NullConnections() {
		List<StationConnection> connections = null;

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(null, result);
	}

	@Test
	public void testCalculateTicketsPrice_EmptyConnections() {
		List<StationConnection> connections = new ArrayList<>();

		List<StationConnection> result = PriceCalculatorHelper.calculateTicketsPrice(connections);

		assertEquals(0, result.size());
	}
}
