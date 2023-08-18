import { AiFillHome } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdCottage } from "react-icons/md";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { SiFunimation } from "react-icons/si";
import { i18n } from "../translate/i18n";

export default [
  {
    name: i18n.t("items.home"),
    icon: AiFillHome,
    path: "",
    target: "_self",
  },
  {
    name: i18n.t("items.cottage"),
    icon: MdCottage,
    path: "/chales",
    target: "_self",
  },
  {
    name: i18n.t("items.location"),
    icon: HiLocationMarker,
    path: "/localizacao",
    target: "_self",
  },
  {
    name: i18n.t("items.leisure"),
    icon: SiFunimation,
    path: "/lazer",
    target: "_self",
  },
  {
    name: i18n.t("items.book"),
    icon: BsFillChatSquareHeartFill,
    path: "https://hbook.hsystem.com.br/Booking?companyId=5f28e3fbab41d429a42ac74c",
    target: "_blank",
  },
];
