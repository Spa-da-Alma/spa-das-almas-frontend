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
  },
  {
    name: i18n.t("items.cottage"),
    icon: MdCottage,
    path: "chales",
  },
  {
    name: i18n.t("items.location"),
    icon: HiLocationMarker,
    path: "localizacao",
  },
  {
    name: i18n.t("items.leisure"),
    icon: SiFunimation,
    path: "/",
  },
  {
    name: i18n.t("items.book"),
    icon: BsFillChatSquareHeartFill,
    path: "/",
  },
];
