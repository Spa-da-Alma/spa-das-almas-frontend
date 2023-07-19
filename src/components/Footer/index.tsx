import React from "react";
import { AiFillInstagram, AiFillFacebook, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-800 flex flex-col md:flex-row justify-center md:justify-evenly p-4 gap-2">
      <div>
        <h3 className="after:content-[''] after:block after:bg-white after:w-[50px] after:h-[2px] after:mt-1 text-white">Nossas redes sociais</h3>
        <ul className="my-2 flex flex-col gap-2">
          <li>
            <a href="https://www.instagram.com/spadaalmamv/" className="flex gap-2">
              <AiFillInstagram size={24} color="white" />
              <span className="text-gray-400">@spadasalmas</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hospedagemspadaalma/" className="flex gap-2">
              <AiFillFacebook size={24} color="white" />
              <span className="text-gray-400">/aspadasalmas</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="after:content-[''] after:block after:bg-white after:w-[50px] after:h-[2px] after:mt-1 text-white">Entre em contato</h3>
        <ul className="my-2 flex flex-col gap-2">
          <li>
            <a href="" className="flex gap-2">
              <HiOutlineMail size={24} color="white" />
              <span className="text-gray-400">contato@spadasalmas.com</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2">
              <AiOutlinePhone size={24} color="white" />
              <span className="text-gray-400">+55 (032) 3333-3333</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
