import { useState } from "react";
import { Lock } from "lucide-react";
import { GithubIcon } from "./BrandIcons.jsx";
import { projects, projectFilters } from "../data.js";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Selected work</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Listed latest to oldest. Every card links to the GitHub repo.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-indigo-600 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <h3 className="font-semibold leading-snug text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {project.period}
                </p>
              </div>

              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <GithubIcon size={15} />
                    View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-500">
                    <Lock size={14} />
                    Internal project — no public repo
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
