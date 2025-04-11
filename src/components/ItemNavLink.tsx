import { NavLink, useSearchParams } from "react-router-dom";

interface ItemNavLinkProps {
  to: string;
  name: string;
}
const ItemNavLink = ({ to, name }: ItemNavLinkProps) => {
  /**
   * Lấy ra base url
   */
  const BASE_URL = import.meta.env.VITE_BASE_URL
    ? import.meta.env.VITE_BASE_URL + "/"
    : "/";

  /** Lấy ra các search params */
  const [search_params] = useSearchParams();
  return (
    <NavLink
      to={BASE_URL + to + "?" + search_params.toString()}
      className={({ isActive }) =>
        isActive
          ? "bg-gray-100 flex h-10 items-center gap-x-2.5 px-4 p-1 rounded cursor-pointer "
          : "bg-white hover:bg-gray-100 flex h-10 items-center gap-x-2.5 px-4 p-1 rounded cursor-pointer"
      }
    >
      {name}
    </NavLink>
  );
};

export default ItemNavLink;
