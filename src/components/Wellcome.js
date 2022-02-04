import { FaUserAlt } from "react-icons/fa";
function Wellcome() {
  return (
    <div className="w-full fixed top-0 flex flex-col justify-center items-center bg-blue-100  py-2 px-2 rounded-b-full  ">
      <span className="bg-gray-500 text-white w-14 h-14 flex justify-center items-center rounded-full">
        <FaUserAlt fontSize="1.8rem" />
      </span>
      <p className="text-2xl tracking-wider">Wellcome!</p>
    </div>
  );
}

export default Wellcome;
