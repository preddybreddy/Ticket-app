import TicketCard from "./(components)/TicketCard";

const Dasboard = () => {
  return (
    <div className="lg: grid grid-cols-2 xl:grid-cols-4 sm:grid grid-cols-1">
      <TicketCard />
      <TicketCard />

      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dasboard;
