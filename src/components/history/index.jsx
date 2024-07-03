import { Arrow } from "../../ui/arrow";

export const History = (props) => {
  const { type, day, dateStart, dateEnd } = props
  return (
    <div className="grid grid-cols-3 text-secondary-text py-4 px-2 border-b border-primary-border">
      <div>{type}</div>
      <div className="flex gap-2 items-center">
        <div>{dateStart}</div>
        <Arrow color={type === "Отпуск" ? "#FFB649" : "#D32F2F"} />
        <div>{dateEnd}</div>
      </div>
      <div className="text-right">{day}</div>
    </div>
  );
}

