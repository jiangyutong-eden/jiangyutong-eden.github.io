import { ArrowUpRight } from "lucide-react";
import { bio, news, aboutMeText, researchInterestText, publications, internships, awards, education } from "@/data/content";
import type { ExperienceItem, EducationItem } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";
const basePath = "/jiangyutong.github.io/publications";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 顶部导航：仅右上角 Publication | Internship | Awards */}
     <header className="sticky top-0 z-20 -mx-4 bg-emerald-100 py-3 backdrop-blur lg:-mx-8">
        <nav className="flex w-full justify-end gap-6 px-8 text-sm font-medium text-slate-700">
          <a href="#publications" className="hover:text-slate-900">Publication</a>
          <a href="#education" className="hover:text-slate-900">Education</a>
          <a href="#internship" className="hover:text-slate-900">Internship</a>
          <a href="#awards" className="hover:text-slate-900">Awards</a>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-2 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 左侧：头像 + email + CV + icons，居中对齐；大屏 sticky */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
           <div className="flex flex-col items-center p-6 text-center">

              {/* avatar */}
              <div className="aspect-square w-full max-w-[180px] overflow-hidden rounded-full">
                <img
                  src="/jiangyutong.github.io/avatar.jpg"
                  alt="Yutong Jiang"
                  className="h-full w-full object-cover"
                />
              </div>
            
              {/* name */}
              <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 font-serif">
                Yutong Jiang
              </p>
            
              {/* affiliation */}
              <p className="mt-1 text-sm text-slate-600">
                M.S. Student · Tongji University
              </p>
            
              {/* buttons */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">
            
                <a
                  href={`mailto:${bio.email}`}
                  className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-emerald-50"
                >
                  Email
                </a>
            
                <a
                  href="/jiangyutong.github.io/publications/CV-Jiang.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-emerald-50"
                >
                  CV
                </a>
            
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-emerald-50"
                >
                  Scholar
                </a>
            
              </div>
            
            </div>
          </aside>

          {/* 右侧内容 */}
          <div className="w-full min-w-0 space-y-16 lg:col-span-8">
            {/* About Me */}
                <section id="about">
                  <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
                    About Me
                  </h2>
                  <div className="text-[15px] leading-6 text-slate-700">
                    {aboutMeText}
                  </div>
                </section>
            
            {/* Research Interest */}
            <section>
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
                Research Interest
              </h2>
              <div className="text-[15px] leading-6 text-slate-700">{researchInterestText}</div>
            </section>

            {/* News */}
            <section id="news">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
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
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
                Publication
              </h2>
            <div className="divide-y divide-emerald-100">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="flex w-full items-start gap-6 py-10"
                >
                  {/* 图片 */}
                  <div className="min-w-0 flex-[1.2]">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded">
                      {pub.thumbnail ? (
                        <img
                          src={pub.thumbnail}
                          alt={pub.thumbnailAlt || pub.title}
                          className="h-full w-full object-cover"
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
                    <p className="text-[16px] font-medium leading-6 text-slate-900">
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
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
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
                <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
                  Internship
                </h2>
                <ul className="space-y-4 text-sm text-slate-700">
                  {internships.map((item: ExperienceItem, idx: number) => (
                    <li key={idx}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-medium text-slate-900">
                            {item.title}
                            {item.organization && (
                              <span className="text-slate-600"> · {item.organization}</span>
                            )}
                          </p>
                        </div>
                        <div className="text-sm text-slate-500 sm:text-right">
                          <p>{item.period ?? item.year}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

            {/* Honors and Awards */}
          <section id="awards">
            <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black font-serif">
              Honors and Awards
            </h2>
            <ul className="space-y-4 text-sm text-slate-700">
              {awards.map((item: ExperienceItem, idx: number) => (
                <li key={idx}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-medium text-slate-900">
                        {item.title}
                        {item.organization && (
                          <span className="text-slate-600"> · {item.organization}</span>
                        )}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500 sm:text-right">
                      <p>{item.period ?? item.year}</p>
                    </div>
                  </div>
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
