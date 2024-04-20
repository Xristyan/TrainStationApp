import { TrainStationForm } from "./TrainStationForm";
import classes from "@styles/trainStation/_train-station-container.module.scss";
import { TicketCard } from "./TicketCard/TickedCard";
import { getFields } from "@/lib/getFields";
import { InfoContainer } from "./InfoContainer";

export const TrainStationContainer = async () => {
  const fields = await getFields();

  const ticketsHandler = () => {};

  return (
    <section className={classes.container}>
      <InfoContainer fields={fields} />
    </section>
  );
};
