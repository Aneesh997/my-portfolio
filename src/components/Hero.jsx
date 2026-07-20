import { ArrowRight, FileText, MapPin } from "lucide-react";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(79,70,229,0.10), transparent 55%), radial-gradient(circle at 85% 0%, rgba(20,184,166,0.08), transparent 50%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Full-Stack Developer &amp; Cloud Computing
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Hi there, I'm Aneesh.
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I'm Aneesh, a Computer Science undergrad at RV University specializing in Cloud
          Computing. I build scalable web applications with the MERN stack and cloud
          architectures on AWS — and I'm currently looking for internship and full-time
          opportunities.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-colors hover:bg-indigo-700"
          >
            View My Projects
            <ArrowRight size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            My Resume
            <FileText size={16} />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
