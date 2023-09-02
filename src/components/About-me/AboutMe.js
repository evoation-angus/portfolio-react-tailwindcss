import portrait from "../../img/me.jpg";

export default function AboutMe() {
  return (
    <div className="pt-40 bg-gradient-to-tr from-white to-green-300 dark:bg-gradient-to-tr dark:from-black dark:to-green-900 min-h-screen px-10">
      <div className="flex flex-wrap justify-center">
        <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pt-14 pb-10">
            <img
              className="w-48 h-48 mb-3 rounded-full shadow-lg"
              src={portrait}
              alt=""
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Angus Horan
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Software Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://www.linkedin.com/in/angus-horan-5a6aa8193/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap py-20 text-left justify-center">
        <ol className="relative border-l border-gray-400 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
              January 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create Dragonside project
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Start working for Refraction Data Ltd
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
              March 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Finish work at Refraction Data Ltd
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
