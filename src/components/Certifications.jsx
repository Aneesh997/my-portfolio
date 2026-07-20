import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Certifications
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Courses &amp; credentials</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <BadgeCheck size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {cert.issuer} · {cert.period}
              </p>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{cert.detail}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
