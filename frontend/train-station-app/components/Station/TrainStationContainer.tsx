import { TrainStationForm } from "./TrainStationForm";
import classes from "@styles/trainStation/_train-station-container.module.scss";
import { TicketCard } from "./TicketCard/TickedCard";
import { getFields } from "@/lib/getFields";

export const TrainStationContainer = async () => {
  const fields = await getFields();
  console.log(fields);

  return (
    <section className={classes.container}>
      <TrainStationForm searchFields={fields} />
      <section className={classes.ticketsContainer}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </section>
    </section>
  );
};
