import { profile } from "../lib/content";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border px-4 py-8 sm:px-5 lg:px-5">
      <div className="page-shell flex flex-col gap-4 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks items={["email", "linkedin", "github"]} />
      </div>
    </footer>
  );
}
