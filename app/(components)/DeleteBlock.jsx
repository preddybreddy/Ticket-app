"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      throw new Error("Error deleting ticket");
    } else {
      router.push("/");
      router.refresh();
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="size-3.5 text-red-700 hover:cursor-pointer"
        onClick={() => deleteTicket(id)}
      />
    </div>
  );
};

export default DeleteBlock;
