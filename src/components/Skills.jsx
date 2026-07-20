import { Code2, Cloud, Database, Wrench, Sparkles } from "lucide-react";
import { skillGroups, exploring } from "../data.js";

const ICONS = { Code2, Cloud, Database, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-semibold">What I bring to the stack</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Full-stack development and cloud computing lead — everything else supports that.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 dark:border-slate-700 dark:bg-slate-900/40">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{exploring.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{exploring.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exploring.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
