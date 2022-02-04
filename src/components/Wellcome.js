import { FaUserAlt } from "react-icons/fa";
function Wellcome() {
  return (
    <div className="w-full flex flex-col justify-center items-center  ">
      <span className="bg-gray-500 text-white w-14 h-14 flex justify-center items-center rounded-full">
        <FaUserAlt fontSize="1.8rem" />
      </span>
      <p className="text-2xl tracking-wider">Wellcome!</p>
    </div>
  );
}

export default Wellcome;
