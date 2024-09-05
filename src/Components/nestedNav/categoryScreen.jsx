import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { useContext } from "react";
import { UserDetails } from "./nav-stack";

export const CategorieScreen = () => {
  const {username,counter}=useContext(UserDetails)

  return (
    <>

      <Navbar />
      <h1>Welcome {username}</h1>
      <h2>Counter {counter}</h2>
      <div>
        <h1>Welcome to category screen</h1>
        <Link to={"jewelery"} >Jewelery</Link>
        <Link to={"electronics"} >Electronics</Link>
        <Outlet/>
      </div>
    </>
  );
};
