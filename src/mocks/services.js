import { FaCoffee, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { i18n } from "../translate/i18n";

export default [
  {
    name: i18n.t("services.breakfast"),
    icon: FaCoffee,
  },
  {
    name: i18n.t("services.wifi"),
    icon: FaWifi,
  },
  {
    name: i18n.t("services.massages"),
    icon: TbMassage,
  },
  {
    name: i18n.t("services.pool"),
    icon: FaSwimmingPool,
  },
];
