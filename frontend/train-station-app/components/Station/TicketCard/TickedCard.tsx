import classes from "@styles/trainStation/_ticked-card.module.scss";
export const TicketCard = ({
  typeOfTravel,
  toStation,
  fromStation,
  arrivalDateTime,
  departureDateTime,
  distance,
  price,
}) => {
  return (
    <div className={classes.tickedCard}>
      <section className={classes.tickedInfo}>
        <label>Name</label>
        <div>
          <span>14:00</span>-<span>17:00</span>
          <span>Direct</span>
          <div>Price</div>
        </div>
      </section>
      <section className={classes.tickedMap}>map</section>
    </div>
  );
};
