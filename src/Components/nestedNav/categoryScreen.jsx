import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

export const CategorieScreen = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to category screen</h1>
        <Link to={"jewelery"} >Jewelery</Link>
        <Link to={"electronics"} >Electronics</Link>
        <Outlet/>
      </div>
    </>
  );
};
