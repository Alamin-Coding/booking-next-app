import Link from "next/link";

const MainMenu = () => {
  return (
    <ul className="flex items-center gap-7">
      <li>
        <Link className="text-base text-linkColor font-medium font-body" href={"/"}>Home</Link>
      </li>
      <li>
        <Link className="text-base text-linkColor font-medium font-body" href={"/categories"}>Categories</Link>
      </li>
      <li>
        <Link className="text-base text-linkColor font-medium font-body" href={"/destination"}>Destination</Link>
      </li>
      <li>
        <Link className="text-base text-linkColor font-medium font-body" href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link className="text-base text-linkColor font-medium font-body" href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
