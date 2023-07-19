import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-gray-800 flex justify-center items-center p-4">
      <div>
        <h3 className="footer__title">Nossas redes sociais</h3>
        <ul className="my-2 flex flex-col gap-2">
          <li>
            <a href="" className="flex gap-2">
              <AiFillInstagram size={24} color="white" />
              <span>@spadasalmas</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-2">
              <AiFillFacebook size={24} color="white" />
              <span>/aspadasalmas</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
