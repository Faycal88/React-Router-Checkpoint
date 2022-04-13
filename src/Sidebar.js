import './Sidebar.css';
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className='sidebar' >
            <div className="sidesvg">
            {" "}
            <svg
              className="svgaside"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
            </div>
            <aside className='sidelistcontainer' >
            <ul className='sidelist' >
                    <li> <Link to={"/"}>Now on screens</Link></li>
                    <li> <Link to={"/Showtime"}>Show time</Link> </li>
                    <li> <Link to={"/request"} >Request a movie</Link> </li>
                    <li>News and reviews</li>
                    <li>Contact us</li>
            </ul>
        </aside>
        </div>
        
    )
}

export default Sidebar;