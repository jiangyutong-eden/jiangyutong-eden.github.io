import { ArrowUpRight } from "lucide-react";
import { bio, news, researchInterestText, publications, internships, awards } from "@/data/content";
import type { ExperienceItem } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 顶部导航：仅右上角 Publication | Internship | Awards */}
      <header className="sticky top-0 z-20 bg-white py-3">
        <nav className="mx-auto flex max-w-4xl justify-end gap-6 px-4 text-sm font-medium text-slate-700">
          <a href="#publications" className="hover:text-slate-900">Publication</a>
          <a href="#internship" className="hover:text-slate-900">Internship</a>
          <a href="#awards" className="hover:text-slate-900">Awards</a>
        </nav>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:px-0">
          {/* 左侧：头像 + email + CV + icons，居中对齐 */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="aspect-square w-full max-w-[150px] overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-slate-500">
                  {initialsFromName(bio.name)}
                </div>
              </div>
              <p className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                Yutong Jiang
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <p>
                  <a href={`mailto:${bio.email}`} className="text-slate-800 underline-offset-2 hover:underline">
                    email
                  </a>
                </p>
                {bio.cvLinks.map((cv) => (
                  <p key={cv.label}>
                    <a href={cv.href} target="_blank" rel="noreferrer" className="text-slate-800 underline-offset-2 hover:underline">
                      {cv.label}
                    </a>
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-slate-600">
                {bio.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900"
                  >
                    <SocialIcon platform={link.platform} className="h-3.5 w-3.5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* 右侧：与导航右边缘(Awards)对齐 */}
          <div className="lg:col-span-8 w-full min-w-0 space-y-14">
            {/* Research Interest — 大块段落 */}
            <section>
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-black">
                Research Interest
              </h2>
              <div className="p-4 text-sm leading-relaxed text-slate-700">
                {researchInterestText}
              </div>
            </section>

            {/* News — 日期 + 标题 */}
            <section id="news">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-black">
                News
              </h2>
              <div className="space-y-2">
                {news.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm">
                    <span className="w-20 flex-none text-slate-500">{item.date}</span>
                    <span className="text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Publication — 小图 + 标题 / 会议 / 作者 */}
            <section id="publications">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-black">
                Publication
              </h2>
              <div className="space-y-4">
                {publications.map((pub) => (
                  <article key={pub.title} className="flex w-full items-start gap-4 p-0">
                    <div className="flex-[1] min-w-0">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-200">
                        <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-500">thumb</div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-[3] space-y-0.5">
                      <p className="font-medium text-slate-900">{pub.title}</p>
                      <p className="text-xs text-slate-600">{pub.venue}</p>
                      <p className="text-xs text-slate-500">{pub.authors}</p>
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-700 hover:underline">
                          Link <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Internship */}
            <section id="internship">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-black">
                Internship
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {internships.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && <span className="text-slate-600"> · {item.organization}</span>}
                    {(item.period || item.year) && (
                      <span className="block text-xs text-slate-500">{item.period ?? item.year}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* Honors and Awards */}
            <section id="awards">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-black">
                Honors and Awards
              </h2>
              <ul className="space-y-1 text-sm text-slate-700">
                {awards.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && <span className="text-slate-600"> · {item.organization}</span>}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function initialsFromName(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
