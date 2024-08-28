import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#342E09] mt-10">
        <div className="container px-4 mx-auto items-center">
          <div className="pt-[1rem] pb-[1rem] mx-auto max-w-4xl flex justify-center">
            <img
              src="https://i.imgur.com/XlH3SL3.png"
              alt="Logo"
              className="h-[6rem] md:mx-auto"
            />
            </div>
            <div className="flex justify-center items-center pb-4">
              <div className="px-2 md:w-auto p-0 md:px-6">
                <Link  to="/home" className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium">Home</Link>
              </div>
              <div className="px-2 md:w-auto p-0 md:px-6">
                <Link to="/aboutus" className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium">Sobre</Link>

              </div>
              <div className="px-2 md:w-auto p-0 md:px-6">
                <Link to={'/https://tome.app/hooda-a37/hooda-cm05wjobe01swkgckcy5ataen'} className="text-lg text-amber-400 hover:text-white hover:text-xl duration-200 font-medium">Projeto</Link>
              </div>
            </div>
          
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="container px-4 mx-auto">
          <p className="py-2 md:pb-5 text-md text-gray-400 font-medium text-center">
            © 2024 Hooda Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
