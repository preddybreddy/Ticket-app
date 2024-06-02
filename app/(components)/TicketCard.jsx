import StatusMessage from "./StatusMessage";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressBar from "./ProgressBar";

const TicketCard = ({ ticket }) => {
  return (
    <div className="rounded-md border-4 m-4">
      <div className="flex flex-col p-2 gap-y-2 ">
        <div className="flex justify-between">
          <PriorityDisplay priority={ticket.priority} />
          <DeleteBlock id={ticket._id} />
        </div>
        <h4>{ticket.title}</h4>
        <div className="border border-sky-500 text-sm">
          {ticket.description}
        </div>
        <p className="text-xs">08/31/2023 12:51 p.m</p>
        <ProgressBar progress={ticket.progress} />
        <div className="flex justify-end">
          <StatusMessage />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
