import { faTicket, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="size-3.5 text-red-700 hover:cursor-pointer"
      />
    </div>
  );
};

export default DeleteBlock;
