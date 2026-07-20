import { GraduationCap } from "lucide-react";
import { education } from "../data.js";

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              About
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Full-stack &amp; cloud, with a strong CS foundation
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I'm pursuing a B.Tech (Hons.) in Computer Science Engineering at RV
                University, Bengaluru, specializing in Cloud Computing. My work centers on
                building full-stack applications with the MERN stack and Flask, and designing
                cloud-native systems on AWS — things like Zero-Standing-Privileges credential
                platforms and audit-friendly CRM modules.
              </p>
              <p>
                Alongside that, I'm genuinely enthusiastic about AI/ML and take on projects in
                it for fun — but it's an interest I explore, not my main focus. Full-stack
                development and cloud architecture are what I want to build my career around.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Education
            </p>
            <ol className="mt-4 space-y-5">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <GraduationCap size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.institution} · {item.period}
                      </p>
                      {item.detail && (
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
