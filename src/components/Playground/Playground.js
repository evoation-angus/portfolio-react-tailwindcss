import Calculator from "./Calculator";

export default function Playground() {
  return (
    <div className="pt-16 bg-gradient-to-tr from-white to-green-300 dark:bg-gradient-to-tr dark:from-black dark:to-green-900 min-h-screen py-10">
      <div className="md:px-20 px-5 pt-10">
        <p className="text-5xl text-black dark:text-white pb-10">
          Welcome to my <br />
          Playground
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:grid-cols-1">
          <div
            className="block py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Here is a Calculator built in react.
            </p>
            <div className="pt-10">
              <div id="calculator">
                <Calculator />
              </div>
            </div>
          </div>

          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
