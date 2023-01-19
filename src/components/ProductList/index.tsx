import './styles.css'

import { Link } from "react-router-dom";

type Props = {
  text1 : string;
  text2 : string;
  text3 : string;
}

export default function ProductList( {...rest} : Props ) {
  return (
    <section className="product-container">
      <Link className='product-title' to={""}><p>{rest.text1}</p></Link>
      <Link className='product-title' to={""}><p>{rest.text2}</p></Link>
      <Link className='product-title' to={""}><p>{rest.text3}</p></Link>
    </section>
  )
}