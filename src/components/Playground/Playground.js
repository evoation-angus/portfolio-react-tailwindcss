import Calculator from "./Calculator";

export default function Playground() {
  return (
    <div className="bg-gradient-to-tr from-white to-green-300 dark:bg-gradient-to-tr dark:from-black dark:to-green-900 min-h-screen py-10">
      <div className="px-20">
        <p className="text-5xl text-black dark:text-white pb-10">
          Welcome to my <br />
          Playground
        </p>
        <div className="flex flex-row">
          <div
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 mr-5"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Here is a Calculator built in react.
            </p>
            <div className="px-10 pt-10">
              <div id="calculator">
                <Calculator />
              </div>
            </div>
          </div>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 "
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
