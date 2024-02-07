import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "./Component/Provider/AuthProvider";
import Github from "./Component/Github/Github";

function App() {
  const { mode } = useContext(AuthContext);

  console.log(mode);
  return (
    <div
      className={`${
        mode === "Blue" &&
        "bg-gradient-to-r from-gray-700 via-gray-900 to-black "
      }
${mode === "Red" && "bg-gradient-to-r from-gray-800 via-gray-800 to-red-800"}
${
  mode === "Green" && "bg-gradient-to-r from-gray-800 via-gray-800 to-green-800"
}
${mode === "Dark" && "bg-black/95"}

`}
    >
      <Navbar></Navbar>
      <Github />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
