import Link from "next/link";

function Header() {
  if (new Date().getHours() > 15) {
    return (
      <header className="md:flex justify-around md:px-9 md:bg-black md:py-5 md:text-black">
        <div>
          <Link className="font-bold " href="/">
            <span className="md:text-white font-black">Pulse</span>
            <span className="md:text-white"> | Track</span>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link
                className="md:px p-3 text-md md:text-white text-blue-900
              font-black text-"
                href="/"
              >
                Home
              </Link>
              <Link className="px-5 font-bold text-md" href="/my_account">
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="lg:flex md:flex md:justify-around md:px-9 md:bg-white md:py-5 md:text-black">
        <div>
          <Link className="font-bold " href="/">
            <span className="text-blue-900 uppercase">Pulse</span> | Track
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link
                className="md:bg-white md:px p-3 text-md text-blue-900
              font-black text-"
                href="/"
              >
                Home
              </Link>
              <Link className="px-5 font-bold text-md" href="/my_account">
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
