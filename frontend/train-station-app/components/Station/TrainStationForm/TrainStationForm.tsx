"use client";
import React, { FC, useEffect, useState } from "react";
import classes from "@styles/trainStation/_station-form.module.scss";
import { Select } from "@/components/common/Select";
import { Input } from "@/components/common/Input";

type TrainStationFormProps = {
  searchFields: any;
};

export const TrainStationForm: FC<TrainStationFormProps> = ({
  searchFields,
}) => {
  const [stationFrom, setStationFrom] = useState("");
  const [stationTo, setStationTo] = useState("");
  const [departureTime, setDepartireTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [typeOfTravel, setTypeOfTravel] = useState(
    searchFields.typesOfTravel[0]
  );

  useEffect(() => {
    if (stationFrom || (stationTo && searchFields)) {
    }
  }, [searchFields]);

  const filterStationsFieldsHandler = (valueToExclude: string) => {
    if (valueToExclude) {
      return searchFields.stations.filter((station: string) => {
        return station !== valueToExclude;
      });
    }
    return searchFields.stations;
  };

  return (
    <section className={classes.container}>
      <div className={classes.heading}>Where are you traveling</div>

      <form className={classes.formSection}>
        <Select
          onChange={(e) => {
            setStationFrom(e.target.value);
          }}
          value={stationFrom}
          options={searchFields ? filterStationsFieldsHandler(stationTo) : []}
          label="From"
          className={classes["input-1"]}
          reqired
          defaultMessage="Choose a station"
        />
        <Select
          onChange={(e) => {
            setStationTo(e.target.value);
          }}
          value={stationTo}
          options={searchFields ? filterStationsFieldsHandler(stationFrom) : []}
          label="To"
          className={classes["input-2"]}
          reqired
          defaultMessage="Choose a station"
        />
        <Input
          type="datetime-local"
          label="Departure Time"
          value={""}
          onChange={(e) => {
            setDepartireTime(e.target.value);
          }}
          className={classes["input-3"]}
        />
        <Input
          type="datetime-local"
          label="Arrival Time"
          value={""}
          onChange={(e) => {
            setArrivalTime(e.target.value);
          }}
          className={classes["input-4"]}
        />
        <Select
          onChange={() => {}}
          value={1}
          options={["asd", "csc"]}
          label="Оne-way/Тwо-way train"
          className={classes["input-5"]}
        />
      </form>
    </section>
  );
};
