import { i18n } from "../../translate/i18n";
import { useState } from "react";

function SobreNos() {
  return (
    <div className="p-6 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
        <div className=" rounded shadow-lg overflow-hidden p-2 md:w-3/4 lg:w-2/3 xl:w-1/3">
          <img
            src="/assets/chales/martigny/IMG_0138.JPG"
            className="w-full h-72 object-cover rounded"
          />
        </div>
        <div className="text-center md:text-left  md:w-1/4 lg:1/3">
          <h2 className="text-[#1f2937] font-bold text-3xl mb-2 px-4">
            Descubra Mais Sobre Nós
          </h2>
          <div className="flex flex-col px-4 gap-4">
            <p className="text-left text-sm text-gray-700 font-thin">
              Localizada em Monte Verde-MG, a Hospedagem Spa “da Alma” tem como
              propósito ser uma pequena pousada, em meio a uma ampla área verde
              e arborizada. Chalés distantes uns dos outros no topo da montanha
              e rodeados pela beleza indescritível da região.
            </p>
            <p className="text-left text-sm text-gray-700 font-thin">
              Foi projetada de modo a reunir diferentes sensações e sentimentos
              que permitem a seus visitantes uma experiência verdadeiramente
              única. Ao pôr do sol, a paisagem se converte num desafio para os
              sentidos que se mistura com os ritmos naturais da brisa e o
              espetáculo natural do pôr do sol, montanha e floresta,
              tranformando-se numa só sensação ótica.
            </p>
            <p className="text-left text-sm text-gray-700 font-thin">
              Este acúmulo de sensações que se despertam ao entrar em contato
              com fauna e flora do local. Esta experiência se completa mais
              ainda com a maravilhosa oportunidade de avistar esquilos, macacos,
              coelhos selvagens e até tucanos. Chegar em Monte Verde e poder
              desfrutar de todos esses prazeres e particularidades da região, é
              voltar à nossa sabedoria mais primitiva e ao contato mais natural
              com a terra. Seu pet é bem-vindo na nossa pousada, nos informe no
              momento da reserva para conhecer os detalhes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
