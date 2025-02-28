import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Main() {
  return (
    <>
      <Header />
      <div className=" max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}
