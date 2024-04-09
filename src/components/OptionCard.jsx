import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const OptionCard = ({ image, text, description, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-col rounded-xl justify-center items-center font-bold text-center p-6 cursor-pointer ${
        isSelected ? "border-2 border-pink-500" : "border border-gray-200"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={text} />

      <div>
        <p>{text}</p>
      </div>
      <div className={`mt-2 ${isSelected ? "block" : "hidden"}`}>
        <p className="font-gray-400 text-sm  font-normal">{description}</p>
      </div>
      {isSelected ? (
        <FontAwesomeIcon icon={faCircleCheck} className="text-pink-500 mt-2" />
      ) : (
        <div className="h-4 w-4 mt-2 border border-gray-400 rounded-full"></div>
      )}
    </div>
  );
};

export default OptionCard;
