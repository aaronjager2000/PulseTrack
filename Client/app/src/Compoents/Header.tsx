import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between px-9 py-9 ">
      <div>
        <Link className="font-bold " href="/">
          <span className="text-blue-900 uppercase">Pulse</span> | Track
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              className="px-4 p-3 text-md text-blue-900
              font-black text-"
              href="/"
            >
              Home
            </Link>
            <Link className="px-5 font-bold text-md" href="/my_account">
              My Account
            </Link>
            <button className="font-thin">| Dark Mode |</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
