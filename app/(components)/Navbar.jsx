import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between bg-slate-500 p-4">
        <div className="flex justify-start space-x-4">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
          </Link>
          <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className="nav-icon" />
          </Link>
        </div>
        <p>p7.ready@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
