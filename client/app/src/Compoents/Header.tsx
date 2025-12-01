import Link from "next/link";

function Header() {
  if (new Date().getHours() < 15) {
    return (
      <header
        className="max-sm:bg-wnite max-sm:text-sm  max-sm:font-bold flex justify-around max-md:justify-around bg-black max-md:p-2 max-md:pr-[300]
      max-md:py-5 max-md:bg-white max-md:text-black py-5"
      >
        <div>
          <Link href="/">
            <span className="maX-md-text:blue-900 text-1xs">
              Pulse<span className="md:text-white text-2xs">Track</span>
            </span>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link
                className="md:bg-black md:px p-3 max-md:hidden text-blue-900
              font-black text-"
                href="/"
              >
                Home
              </Link>
              <Link
                className="px-5 font-bold  text-blue-700 max-md:text-blue-900 max-md:hidden"
                href="/my_account"
              >
                My Account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header className="max-sm:bg-wnite max-sm:text-sm  max-sm:font-bold flex md:flex md:justify justify-around md:bg-black md:py-5 md:text-black">
      <div>
        <Link href="/">
          <h4 className="max-md:text-2sm md:text-white font-bold">
            Pulse | Track
          </h4>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              className="md:px p-3 text-md md:text-white text-blue-900
              font-black"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-5 font-bold text-md text-md text-blue-900"
              href="/my_account"
            >
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
