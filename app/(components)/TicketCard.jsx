import StatusMessage from "./StatusMessage";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";

const TicketCard = () => {
  return (
    <div className="rounded-md border-4 m-4">
      <div className="flex flex-col p-2 gap-y-2 ">
        <div className="flex justify-between">
          <PriorityDisplay priority={2} />
          <DeleteBlock />
        </div>
        <h4>Title</h4>
        <div className="border border-sky-500 text-sm">
          Description of the ticket goes here
        </div>
        <p className="text-xs">08/31/2023 12:51 p.m</p>
        <div className="flex justify-end">
          <StatusMessage />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
