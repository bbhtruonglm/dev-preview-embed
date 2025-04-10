import { NavLink } from "react-router-dom";

interface ItemNavLinkProps {
  to: string;
  name: string;
}
const ItemNavLink = ({ to, name }: ItemNavLinkProps) => {
  return (
    <NavLink
      to={`/${to}`}
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
