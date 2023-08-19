import { i18n } from "../../translate/i18n";
import { useState } from "react";

function Localizacao() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-4 lg:gap-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5051.144008075224!2d-46.021924555312545!3d-22.863270661739612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc104a3a67a26b%3A0x34aa88739c7f0e92!2sHospedagem%20Spa%20da%20Alma!5e0!3m2!1sen!2sbr!4v1689790413916!5m2!1sen!2sbr"
        width="100%"
        height="500"
      ></iframe>
      <div className="text-justify text-lg text-gray-900 px-4">
        <p className="inline">
          {i18n.t("titles.location.description").length > 400
            ? showMore
              ? i18n.t("titles.location.description")
              : `${i18n.t("titles.location.description").slice(0, 400)}...`
            : i18n.t("titles.location.description")}
        </p>
        {i18n.t("titles.location.description").length > 400 &&
          (showMore ? (
            <span
              className="inline ml-2 text-blue-600 cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {i18n.t("paragraphs.see_less")}
            </span>
          ) : (
            <span
              className="inline ml-2 text-blue-600 cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {i18n.t("paragraphs.see_more")}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Localizacao;
