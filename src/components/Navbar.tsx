import ItemNavLink from "./ItemNavLink";
import { t } from "i18next";

export default function Navbar() {
  return (
    <div className={`fixed flex w-full top-0 md:px-3 px-2 pt-2 z-50`}>
      <div className="flex justify-center items-center flex-grow mx-auto h-14 bg-white bg-opacity-85 backdrop-blur-md  text-black shadow-sm border rounded-full border-slate-200">
        <ItemNavLink to="" name={t("home")} />
        {/* <ItemNavLink to="about" name="About" />
        <ItemNavLink to="contact" name="Contact" /> */}
      </div>
    </div>
  );
}
