import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          For internship opportunities, professional inquiries, or collaboration on full-stack
          and cloud computing projects, please reach out using the details below.
        </p>

        <div className="mt-10">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">{profile.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-indigo-600 dark:text-indigo-400" />
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">{profile.phone}</span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              title="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
