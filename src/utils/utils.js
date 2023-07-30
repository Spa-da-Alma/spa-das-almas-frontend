import { i18n } from "../translate/i18n";

export const location_description = `
Saindo de São Paulo, utilize a Rod. Fernão Dias (BR-381) sentido Belo
Horizonte. Após a Divisa SP/MG siga por mais 30Km passando pelas
cidades de Extrema e Itapeva e entrando em Camanducaia para acessar a
estrada Camanducaia/M.Verde de 29Km montanha acima. No Km 13
aproximadamente haverá uma ponte. Após esta ponte entre na segunda à
direita e siga por mais 17 Km até o até o portal da Cidade Após chegar
ao portal, siga pela avenida Monte Verde, que é a continuação da
estrada, até a praça do Bradesco. Você pode seguir em frente,
contornando a curva em subida á direita no restaurante Chalana na Rua
da Represa e seguindo em frente até uma bifurcação onde você deverá
subir a esquerda até chegar na pousada Hospedagem Spa da Alma, que
fica no final desta rua! Estamos na Rua da Represa, 1477!`;

export const callAction = [
  { name: i18n.t("items.cottage"), path: "/chales", image: "chales.jpg" },
  { name: i18n.t("items.leisure"), path: "/lazer", image: "lazer.jpg" },
];

export const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
