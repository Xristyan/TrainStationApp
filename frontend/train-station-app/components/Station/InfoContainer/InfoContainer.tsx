"use client";
import classes from "@styles/trainStation/_train-station-container.module.scss";
import { TrainStationForm } from "../TrainStationForm";
import { TicketCard } from "../TicketCard/TickedCard";
import { useCallback, useEffect, useState } from "react";
import useHttp from "@/hooks/use-http";
export const InfoContainer = ({ fields }) => {
  const [tickets, setTickets] = useState([]);

  const { isLoading, error, requestHandler } = useHttp();

  const ticketsHandler = (data) => {
    console.log(data);
    setTickets(data);
  };

  const searchFieldsHandler = useCallback(
    ({
      stationFrom,
      stationTo,
      departureTime,
      arrivalTime,
      typeOfTravel,
      hasChiled,
      childAge,
    }: any) => {
      if (stationFrom !== "" || stationTo !== "") {
        console.log("test");
        requestHandler(
          {
            url: "http://localhost:8080/connections",
            method: "POST",
            body: {
              stationFromName: stationFrom === "" ? null : stationFrom,
              stationToName: stationTo === "" ? null : stationTo,
              departureDateTime: departureTime === "" ? null : departureTime,
              arrivalDateTime: arrivalTime === "" ? null : arrivalTime,
              typeOfTravel: typeOfTravel === "" ? null : typeOfTravel,
              hasChiled,
              childAge,
            },
            headers: {
              "Content-Type": "application/json",
            },
          },
          ticketsHandler
        );
      }
    },
    []
  );

  return (
    <>
      <TrainStationForm
        searchFieldsHandler={searchFieldsHandler}
        searchFields={fields}
      />
      <section className={classes.ticketsContainer}>
        {isLoading && "...Loding"}
        {tickets &&
          tickets.length !== 0 &&
          tickets.map((ticket, i) => {
            return <TicketCard key={i} />;
          })}
      </section>
    </>
  );
};
