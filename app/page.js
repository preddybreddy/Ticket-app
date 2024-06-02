import TicketCard from "./(components)/TicketCard";
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Tickets");
    }

    return res.json();
  } catch (error) {
    console.log("Error in fetching tickets from db", error);
  }
};
const Dasboard = async () => {
  const { allTickets } = await getTickets();
  console.log(allTickets);
  return (
    <div className="lg: grid grid-cols-2 xl:grid-cols-4 sm:grid grid-cols-1">
      {allTickets.length > 0 &&
        allTickets.map((x, _i) => <TicketCard ticket={x} key={_i} />)}
    </div>
  );
};

export default Dasboard;
