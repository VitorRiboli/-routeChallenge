import "./styles.css";

import homeIcon from '../../assets/home.svg';

import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-content">
          <Link className="nav-title" to={"/"}><p>Inicio</p></Link>
          <Link className="nav-title" to={"products"}><p>Produtos</p></Link>
          <Link className="nav-title" to={"about"}><p>Sobre nós</p></Link>
        </div>
        <Link to={"/"}><img src={homeIcon} alt="" /></Link>
        
      </nav>
    </header>
  );
}
