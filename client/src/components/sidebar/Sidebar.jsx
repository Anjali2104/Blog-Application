import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className='sidebarImg'
          src="https://images.pexels.com/photos/7693865/pexels-photo-7693865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p>
        I'm a passionate and experienced full-stack developer with a strong background in both front-end and back-end technologies. I thrive on crafting intuitive user experiences through clean and efficient code, while also ensuring robust server-side functionality.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
         <a href="https://www.linkedin.com/in/anjali-upadhyay-7547bb1ab/" target="_blank"  rel="noreferrer" ><i className="sidebarIcon fab fa-facebook-square"> </i> </a> 
         <a href="https://www.linkedin.com/in/anjali-upadhyay-7547bb1ab/" target="_blank"  rel="noreferrer" ><i className="sidebarIcon fab fa-twitter-square"></i></a>
         <a href="https://www.linkedin.com/in/anjali-upadhyay-7547bb1ab/" target="_blank"  rel="noreferrer" ><i className="sidebarIcon fab fa-pinterest-square"></i> </a> 
         <a href="https://www.linkedin.com/in/anjali-upadhyay-7547bb1ab/" target="_blank"  rel="noreferrer" > <i className="sidebarIcon fab fa-instagram-square"></i> </a> 
         
        </div>
      </div>
    </div>
  );
}
