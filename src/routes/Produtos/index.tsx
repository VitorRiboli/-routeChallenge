import './styles.css'

import { Link, Outlet } from "react-router-dom";


export default function Produtos() {
  return (
    <section >
      <div className="nav-categories">
        <Link className='nav-categories-title' to={"computer"}><p>Computadores</p></Link>
        <Link className='nav-categories-title' to={"eletronic"}><p>Eletrônicos</p></Link>
        <Link className='nav-categories-title' to={"books"}><p>Livros</p></Link>
      </div>
      
      <Outlet />
    </section>
  )
}