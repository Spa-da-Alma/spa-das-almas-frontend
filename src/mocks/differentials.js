import { FaCoffee, FaWifi, FaPaw } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { i18n } from "../translate/i18n";

export default [
  {
    name: i18n.t("differentials.wifi"),
    icon: FaWifi,
  },
  {
    name: i18n.t("differentials.breakfast"),
    icon: FaCoffee,
  },
  {
    name: i18n.t("differentials.massages"),
    icon: TbMassage,
  },
  {
    name: i18n.t("differentials.pet"),
    icon: FaPaw,
  },
];
