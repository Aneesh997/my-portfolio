import { Briefcase, ExternalLink } from "lucide-react";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Where I've worked</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Three internships across fintech, defence electronics, and academic research.
        </p>

        <div className="relative mt-10 space-y-8 border-l border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <span className="absolute -left-[38px] top-1.5 grid h-7 w-7 place-items-center rounded-full bg-indigo-600 text-white ring-4 ring-white dark:ring-slate-950">
                <Briefcase size={13} />
              </span>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{job.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-600 dark:text-slate-400">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {job.certificateLink && (
                  <a
                    href={job.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
