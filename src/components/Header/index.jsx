import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import items from "../../mocks/items";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import languages from "../../mocks/languages";

import { i18n } from "../../translate/i18n";

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);

  const handleSelectChange = (language) => {
    localStorage.setItem("i18nextLng", `${language}`);
    location.reload();
  };

  return (
    <header>
      <div className="flex items-center justify-between p-4 md:px-8 lg:px-12 relative">
        <div className="flex items-center gap-4">
          <img
            src="/logotipo.png"
            alt="Spa das Almas"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div>
            <h1 className="text-lg md:text-xl uppercase font-medium">
              Spa das Almas
            </h1>
            <p className="text-sm md:text-md">{i18n.t("slogan")}</p>
          </div>
        </div>
        <button
          className="md:hidden z-20"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {activeMenu ? (
            <AiOutlineClose
              size={30}
              color="#0f172a"
              className="fixed right-4 top-8"
            />
          ) : (
            <AiOutlineMenu size={30} color="#0f172a" />
          )}
        </button>
        <div className="hidden md:block cursor-pointer md:w-[35%] lg:w-[25%] max-w-[300px] relative">
          <div
            className="border-2 border-neutral-100 py-2 px-4 rounded-lg flex items-center justify-between bg-white"
            onClick={() => setActiveSelect(!activeSelect)}
          >
            <span>{i18n.t("select.title")}</span>
            {activeSelect ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </div>
          <img src="" alt="" />
          {activeSelect && (
            <div className="border-2 border-neutral-100 rounded-lg absolute left-0 top-[120%] flex flex-col w-full overflow-hidden">
              {languages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white hover:bg-[#fafafa] px-4 py-6 z-10"
                  onClick={() => handleSelectChange(item.language)}
                >
                  <img
                    src={item.flag}
                    alt=""
                    className="w-8 h-5 object-cover"
                  />
                  <span>{item.language}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {activeMenu && (
          <div
            className="fixed min-h-screen w-[60vw] right-0 top-0 shadow-xl pt-[30%] px-6 pb-6 z-10 bg-white md:hidden "
            onBlur={() => setActiveMenu(false)}
          >
            <ul className="flex flex-col gap-4">
              {items.map((item, index) => (
                <Link
                  to={`/${item.path}`}
                  className="text-xl text-gray-950"
                  key={index}
                  onClick={() => setActiveMenu(false)}
                >
                  <li className="flex items-center gap-2">
                    {item.icon && <item.icon size={25} color="#1f2937" />}
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <nav className="hidden md:block bg-gray-800">
        <ul className="flex items-center justify-center">
          {items.map((item, index) => (
            <li
              key={index}
              className=" text-white uppercase bg-transparent hover:bg-gray-900 transition-all w-[180px] cursor-pointer"
            >
              <Link
                to={`/${item.path}`}
                className="text-lg flex flex-col items-center justify-center gap-2 text-center p-4"
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
