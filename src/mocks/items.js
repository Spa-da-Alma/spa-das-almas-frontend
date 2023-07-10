import { GoHomeFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { BsHouseHeartFill } from "react-icons/bs";
import { PiSunglassesFill } from "react-icons/pi";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { i18n } from "../translate/i18n";

export default [
  {
    name: i18n.t("items.home"),
    icon: GoHomeFill,
    path: "",
  },
  {
    name: i18n.t("items.cottage"),
    icon: BsHouseHeartFill,
    path: "chales",
  },
  {
    name: i18n.t("items.location"),
    icon: HiLocationMarker,
    path: "localizacao",
  },
  {
    name: i18n.t("items.leisure"),
    icon: PiSunglassesFill,
    path: "/",
  },
  {
    name: i18n.t("items.book"),
    icon: BsFillChatSquareHeartFill,
    path: "/",
  },
];
