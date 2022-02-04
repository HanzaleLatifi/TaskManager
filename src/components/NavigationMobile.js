import { NavLink, withRouter } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";

function NavigationMobile() {
  return (
    <nav className="w-full fixed bottom-0">
      <ul className="w-full flex bg-blue-500 justify-between px-4 py-2 text-white " >
        <li>
          <NavLink to="/auth" activeClassName="activeNav">
            <div className="flex flex-col  items-center">
             <FiLogIn fontSize="1.8rem" />  <p>Login</p> 
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/newtask" activeClassName="activeNav">
            <div className="flex flex-col  items-center">
              <CgPlayListAdd fontSize="1.8rem" /> <p>Add Task</p> 
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="activeNav" exact>
            <div className="flex flex-col  items-center">
            <AiOutlineHome fontSize="1.8rem" /> <p>Home</p> 
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="activeNav">
            <div className="flex flex-col  items-center">
              <FaListUl fontSize="1.8rem" /><p>My Tasks</p> 
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(NavigationMobile) ;
