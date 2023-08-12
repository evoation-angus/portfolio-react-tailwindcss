export default function Hamburger() {
  const toggleVisibility = () => {
    if (
      document.getElementById("navbar-hamburger").classList.contains("hidden")
    ) {
      document.getElementById("navbar-hamburger").classList.remove("hidden");
    } else {
      document.getElementById("navbar-hamburger").classList.add("hidden");
    }
  };

  return (
    <div className="md:hidden flex-row text-end">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleVisibility}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full text-center" id="navbar-hamburger">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a
              href="/portfolio-react-tailwindcss"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/playground"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Playground
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/about-me"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              About me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
