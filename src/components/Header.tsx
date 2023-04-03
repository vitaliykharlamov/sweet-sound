import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-3">
      <button className="block w-8 h-8">
        <IoMenu className="w-full h-full" />
      </button>
      <Link to={"/"} className="flex items-center gap-x-3">
        <img src={logo} alt="Logo" />
        <span className="text-orange-500 text-2xl">SweetSound</span>
      </Link>
      <div className="flex items-center gap-x-2">
        <button className="bg-green-500 block rounded p-2">LogIn</button>
        <button className="bg-yellow-300 block rounded p-2">SignUp</button>
      </div>
    </header>
  );
};
