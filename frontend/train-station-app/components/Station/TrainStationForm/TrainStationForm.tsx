'use client';
import React, { FC, useEffect, useState } from 'react';
import classes from '@styles/trainStation/_station-form.module.scss';
import { Select } from '@/components/common/Select';
import { Input } from '@/components/common/Input';
import { useAppSelector } from '@/redux/hooks';

type TrainStationFormProps = {
  searchFields: any;
  searchFieldsHandler: any;
};

export const TrainStationForm: FC<TrainStationFormProps> = ({
  searchFields,
  searchFieldsHandler
}) => {
  const [stationFrom, setStationFrom] = useState('');
  const [stationTo, setStationTo] = useState('');
  const [departureTime, setDepartireTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [typeOfTravel, setTypeOfTravel] = useState('');
  const [hasChild, setHasChild] = useState(false);
  const [childAge, setChiledAge] = useState(0);
  const card = useAppSelector((state) => state.authReducer.user.card);

  useEffect(() => {
    searchFieldsHandler({
      stationFrom,
      stationTo,
      departureTime,
      arrivalTime,
      typeOfTravel,
      hasChild,
      childAge,
      card
    });
  }, [
    stationFrom,
    stationTo,
    departureTime,
    arrivalTime,
    typeOfTravel,
    hasChild,
    childAge,
    searchFieldsHandler,
    card
  ]);

  const filterStationsFieldsHandler = (valueToExclude: string) => {
    if (valueToExclude) {
      return searchFields.stations.filter((station: string) => {
        return station !== valueToExclude;
      });
    }
    return searchFields.stations;
  };
  useEffect(() => {
    console.log(hasChild);
  }, [hasChild]);

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
          label='From'
          className={classes['input-1']}
          reqired
          defaultMessage='Choose a station'
        />
        <Select
          onChange={(e) => {
            setStationTo(e.target.value);
          }}
          value={stationTo}
          options={searchFields ? filterStationsFieldsHandler(stationFrom) : []}
          label='To'
          className={classes['input-2']}
          reqired
          defaultMessage='Choose a station'
        />
        <Input
          type='datetime-local'
          label='Departure Time'
          value={departureTime}
          onChange={(e) => {
            setDepartireTime(e.target.value);
          }}
          className={classes['input-3']}
        />
        <Input
          type='datetime-local'
          label='Arrival Time'
          value={arrivalTime}
          onChange={(e) => {
            setArrivalTime(e.target.value);
          }}
          className={classes['input-4']}
        />
        <Select
          onChange={(e) => {
            setTypeOfTravel(e.target.value);
          }}
          value={typeOfTravel}
          options={searchFields ? searchFields.typesOfTravel : []}
          label='Оne-way/Тwо-way train'
          className={classes['input-5']}
          defaultMessage='Choose way of travel'
        />
        <Input
          type='checkbox'
          label='With child'
          value={hasChild}
          onChange={(e) => {
            setHasChild(e.target.checked);
          }}
          className={classes['input-6']}
        />
        {hasChild && (
          <Select
            onChange={(e) => {
              setChiledAge(e.target.value);
            }}
            value={childAge}
            options={Array.from(Array(71).keys())}
            label='Age'
            className={classes['input-7']}
            defaultMessage='Age'
          />
        )}
      </form>
    </section>
  );
};
