import CreateTicket from "@/app/(components)/CreateTicket";

const page = async ({ params }) => {
  const fetchExistingTicket = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error in retrieving singlular ticket");
    }
  };
  const { ticket } = await fetchExistingTicket(params.id);
  return (
    <div>
      <CreateTicket id={params.id} ticket={ticket}></CreateTicket>
    </div>
  );
};

export default page;
