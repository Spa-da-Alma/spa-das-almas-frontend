import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <a
        href="https://api.whatsapp.com/send?phone=5561981890316&text=Oi!%20Estou%20interessado%20em%20saber%20mais%20como%20funciona%20os%20chal%C3%A9s."
        target="_blank"
        rel="noreferrer"
        className="bg-gray-800 p-4 rounded-full fixed right-8 bottom-8 z-10"
      >
        <BsWhatsapp size={30} color="white" />
      </a>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
