import classes from "@styles/trainStation/_ticked-card.module.scss";
export const TicketCard = ({
  ticket: {
    fromStation,
    toStation,
    departureDateTime,
    arrivalDateTime,
    price,
    typeOfTravel,
  },
}) => {
  const departure = new Date(departureDateTime);
  const arrival = new Date(arrivalDateTime);
  return (
    <div className={classes.tickedCard}>
      <section className={classes.tickedInfo}>
        <label>
          from: {fromStation && fromStation.name} to:{" "}
          {toStation && toStation.name}
        </label>
        <div>
          <div>
            {departure.getHours()} - {arrival.getHours()}
          </div>
          <div>Type: {typeOfTravel}</div>
          <div>Price: {price}$ </div>
        </div>
      </section>
      <section className={classes.tickedMap}>map</section>
      <button className={classes.button}>Buy Ticket</button>
    </div>
  );
};
