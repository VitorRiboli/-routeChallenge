import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import Content from "../../components/Content";

export default function About() {
  return (
    <section>
      <Content text="Sobre nós" />

      <Outlet />
    </section>
  )
}