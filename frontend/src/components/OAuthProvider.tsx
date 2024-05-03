import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";

export const OAuthProvider = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-7 items-center justify-center mt-6">
        <div className="p-6 border-solid border-[1px] border-main-gray rounded hover:border-light-blue cursor-pointer">
          <img src={facebook} width={"20px"} height={"20px"} alt="Logo" />
        </div>
        <div className="p-6 border-solid border-[1px] border-main-gray rounded hover:border-light-blue cursor-pointer">
          <img src={google} width={"20px"} height={"20px"} alt="Logo" />
        </div>
        <div className="p-6 border-solid border-[1px] border-main-gray rounded hover:border-light-blue cursor-pointer">
          <img src={apple} width={"20px"} height={"20px"} alt="Logo" />
        </div>
      </div>

      <hr className="w-full border-none h-[1px] bg-main-gray mt-7" />
    </div>
  );
};
