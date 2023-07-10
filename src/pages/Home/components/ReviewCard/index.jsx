import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

function ReviewCard({ name, photo, review, platform }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<AiFillStar key={i} color="#FBBB00" />);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="m-4 md:m-10"
    >
      <div className="bg-white shadow-lg rounded-lg p-4 min-h-[350px] cursor-pointer flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img src={photo} alt="" className="rounded-full w-16 h-16" />
          <div>
            <span className="text-lg font-semibold">{name}</span>
            <div className="flex items-center gap-1">
              <span>5.0</span>
              <div className="flex gap-1">{stars}</div>
            </div>
          </div>
        </div>
        <p className="text-gray-800">{review}</p>
        <p className="text-sm text-gray-400 mt-auto">
          Review retirado do{" "}
          <a
            href="https://www.booking.com/hotel/br/hospedagem-spa-da-alma-monte-verde.pt-br.html#tab-reviews"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800"
          >
            {platform}
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
