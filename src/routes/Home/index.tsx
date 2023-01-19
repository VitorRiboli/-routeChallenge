import "./styles.css";

import { Link, Outlet } from "react-router-dom";

import Button from "../../components/Button";
import Content from "../../components/Content";

export default function Home() {
  return (
    <section>
      <Content text="Bem-Vindos!" />

      <Outlet />
    </section>
  );
}
