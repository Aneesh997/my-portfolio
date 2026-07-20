import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { Mail } from "lucide-react";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400" title="Email">
            <Mail size={18} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
