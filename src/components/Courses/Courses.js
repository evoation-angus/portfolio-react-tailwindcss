import courseData from "../../content/Courses.json";
import fcc from "../../img/FreeCodeCamp_logo.png"
import mooc from "../../img/MOOC.png"

export default function Courses() {
  return (
    <div className="pt-16 bg-gradient-to-tr from-white to-green-300 dark:bg-gradient-to-tr dark:from-black dark:to-green-900 min-h-screen px-10">
      <p className="text-5xl text-black dark:text-white pt-10">Completed Courses</p>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 sm:grid-cols-1 pt-10">
        {courseData &&
          courseData.map((course, index) => (
            <article className="relative rounded-2xl shadow-xl bg-white dark:bg-neutral-900 p-10 dark:border-gray-700 dark:border" key={course.courseId}>
              <h3 className="text-gray-800 text-3xl dark:text-slate-200 fond-bold mb-2 hover:text-red-700">
                <a
                  href={course.link}
                  alt={course.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {course.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs">
                <span>
                  <strong className="font-bold "> Finished on </strong>:{" "}
                  {course.date}
                </span>
                <span>
                {course.provider.includes("fcc") ?
                <img className="pt-10 dark:invert" alt="" src={fcc} />
                : <div className="flex flex-row items-center pt-3"><div className="flex-grow"></div>{" "}<img className="moocimg " alt="" src={mooc} /> <h3 className="mooc pl-5 text-gray-800 dark:text-slate-200">MOOC.fi</h3><div className="flex-grow"></div>{" "}</div>}
                </span>
                
                <p className="my-6 text-lg text-gray-700 leading-relaxed dark:text-slate-200">
                  {course.body}
                </p>

                <a
                  href={course.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-green-500 font-bold text-xl hover:underline hover:text-green-400"
                >
                  - See course certificate -
                </a>

                <div className="justify-center mt-5 flex flex-wrap">
                  {course.tags &&
                    course.tags.map((tag, index) => (
                      <span class="bg-green-200 text-green-900 text-sm font-medium mr-2 px-2.5 py-0.5 my-1 rounded-3xl dark:bg-green-900 dark:text-green-300">{tag}</span>
                    ))}
                </div>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}
