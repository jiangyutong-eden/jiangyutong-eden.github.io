import { ArrowUpRight } from "lucide-react";
import { bio, news, aboutMeText, researchInterestText, publications, internships, awards, education } from "@/data/content";
import type { ExperienceItem, EducationItem } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";
const basePath = "/jiangyutong.github.io/publications";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 顶部导航：仅右上角 Publication | Internship | Awards */}
      <header className="sticky top-0 z-20 bg-emerald-100 py-3 backdrop-blur">
       <nav className="flex w-full justify-end gap-6 px-8 text-sm font-medium text-slate-700">
          <a href="#publications" className="hover:text-slate-900">
            Publication
          </a>
          <a href="#internship" className="hover:text-slate-900">
            Internship
          </a>
          <a href="#awards" className="hover:text-slate-900">
            Awards
          </a>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-2 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 左侧：头像 + email + CV + icons，居中对齐；大屏 sticky */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="aspect-square w-full max-w-[160px] overflow-hidden rounded-full bg-slate-200">
                  <img
                    src={`${basePath}/avatar.jpg`}
                    alt="Yutong Jiang"
                    className="h-full w-full object-cover"
                  />
                </div>
              <p className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                Yutong Jiang
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <p>
                  <a
                    href={`mailto:${bio.email}`}
                    className="text-slate-800 underline-offset-2 hover:underline"
                  >
                    email
                  </a>
                </p>
                {bio.cvLinks.map((cv) => (
                  <p key={cv.label}>
                    <a
                      href={cv.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-800 underline-offset-2 hover:underline"
                    >
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

          {/* 右侧内容 */}
          <div className="w-full min-w-0 space-y-16 lg:col-span-8">
            {/* About Me */}
                <section id="about">
                  <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                    About Me
                  </h2>
                  <div className="text-[15px] leading-7 text-slate-700">
                    {aboutMeText}
                  </div>
                </section>
            
            {/* Research Interest */}
            <section>
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Research Interest
              </h2>
              <div className="text-base leading-6 text-slate-700">{researchInterestText}</div>
            </section>

            {/* News */}
            <section id="news">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                News
              </h2>
              <div className="space-y-2.5">
                {news.map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-sm">
                    <span className="w-24 flex-none text-slate-500">{item.date}</span>
                    <span className="text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Publication */}
            <section id="publications">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Publication
              </h2>
            <div className="divide-y divide-amber-100">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="flex w-full items-start gap-6 py-10"
                >
                  {/* 图片 */}
                  <div className="min-w-0 flex-[1.2]">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded bg-white border border-slate-200">
                      {pub.thumbnail ? (
                        <img
                          src={pub.thumbnail}
                          alt={pub.thumbnailAlt || pub.title}
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                          thumb
                        </div>
                      )}
                    </div>
                  </div>
            
                  {/* 文字 */}
                  <div className="min-w-0 flex-[2.8] space-y-1">
                    <p className="text-[16px] font-medium leading-7 text-slate-900">
                      {pub.title}
                    </p>
            
                    <p className="text-sm text-slate-600">
                      {pub.venue}
                    </p>
            
                    <p className="text-sm text-slate-500">
                      {pub.authors.split(", ").map((author, i, arr) => (
                        <span key={i}>
                          {author === "Yutong Jiang" || author === "Y. Jiang" ? (
                            <strong>{author}</strong>
                          ) : (
                            author
                          )}
                          {i < arr.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
            
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-slate-700 hover:underline"
                      >
                        Link <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            </section>

          
            {/* Education */}
            <section id="education">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Education
              </h2>
              <ul className="space-y-4 text-sm text-slate-700">
                {education.map((item: EducationItem, idx: number) => (
                  <li key={idx}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{item.school}</p>
                        <p className="text-slate-700">
                          {item.degree} in {item.major}
                        </p>
                      </div>
                      <div className="text-sm text-slate-500 sm:text-right">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

  
            {/* Internship */}
            <section id="internship">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Internship
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {internships.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && (
                      <span className="text-slate-600"> · {item.organization}</span>
                    )}
                    {(item.period || item.year) && (
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {item.period ?? item.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* Honors and Awards */}
            <section id="awards">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Honors and Awards
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {awards.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && (
                      <span className="text-slate-600"> · {item.organization}</span>
                    )}
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
