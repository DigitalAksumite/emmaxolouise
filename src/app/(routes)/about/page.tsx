import { SiteFooter } from "@/components/site-footer";
import { Heart, BookOpen, Shirt, Zap, Camera, Music } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Emma xolouise. A digital diary of life, productivity tips, lifestyle content, fashion inspiration and motivation from Edinburgh University.",
  keywords: ["emmaxolouise about", "Emma", "Edinburgh University", "lifestyle", "productivity", "fashion"],
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "Get to know Emma xolouise. A digital diary of life, productivity tips, lifestyle content, fashion inspiration and motivation.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#fb7185]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="text-center">
            <span className="mb-4 block text-5xl">✨</span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Me</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Bio Card */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[#e7e5e4] bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-[#292524]">
                  Hello! I&apos;m Emma 💌
                </h2>
                <div className="space-y-4 text-[#44403c]">
                  <p>
                    Welcome to a digital diary of my life! I&apos;m Emma, your average girl who enjoys making a variety of videos - giving you productivity tips, lifestyle content, fashion inspiration and motivating you to be your better self, always!
                  </p>
                  <p>
                    I&apos;m currently studying at Edinburgh University and hope to share my love of the city with you guys. I post new videos weekly, so feel free to subscribe and join the journey!
                  </p>
                  <p className="italic text-[#78716c]">
                    &ldquo;Stay safe and healthy!&rdquo;
                  </p>
                  <p className="text-right font-medium text-[#fb7185]">
                    Thank you for everything,<br />
                    Emma x
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-4">
              <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#e7e5e4] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#fb7185] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#fdf2f8]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fb7185] transition-transform duration-300 ease-out group-hover:scale-110">315K</div>
                  <div className="text-sm text-[#78716c]">Subscribers</div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#e7e5e4] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#c4b5fd] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#f5f3ff]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c4b5fd] transition-transform duration-300 ease-out group-hover:scale-110">255</div>
                  <div className="text-sm text-[#78716c]">Videos</div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#e7e5e4] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#fb7185] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#fdf2f8]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fb7185] transition-transform duration-300 ease-out group-hover:scale-110">22M+</div>
                  <div className="text-sm text-[#78716c]">Views</div>
                </div>
              </div>
            </div>
          </div>

          {/* Topics I Cover */}
          <div className="mt-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-[#292524]">
              Topics I Cover ✨
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group cursor-pointer rounded-2xl border border-[#e7e5e4] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#fb7185] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#fdf2f8]">
                <Zap className="mb-3 h-8 w-8 text-[#fb7185] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3" />
                <h4 className="font-bold text-[#292524] transition-colors group-hover:text-[#fb7185]">Productivity</h4>
                <p className="mt-1 text-sm text-[#78716c]">Study tips & time management</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border border-[#e7e5e4] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#c4b5fd] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#f5f3ff]">
                <Shirt className="mb-3 h-8 w-8 text-[#c4b5fd] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3" />
                <h4 className="font-bold text-[#292524] transition-colors group-hover:text-[#c4b5fd]">Fashion</h4>
                <p className="mt-1 text-sm text-[#78716c]">Style & outfit inspiration</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border border-[#e7e5e4] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#fb7185] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#fdf2f8]">
                <BookOpen className="mb-3 h-8 w-8 text-[#fb7185] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3" />
                <h4 className="font-bold text-[#292524] transition-colors group-hover:text-[#fb7185]">Lifestyle</h4>
                <p className="mt-1 text-sm text-[#78716c]">Daily routines & vlogs</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border border-[#e7e5e4] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-[#c4b5fd] hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#f5f3ff]">
                <Heart className="mb-3 h-8 w-8 text-[#c4b5fd] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3" />
                <h4 className="font-bold text-[#292524] transition-colors group-hover:text-[#c4b5fd]">Motivation</h4>
                <p className="mt-1 text-sm text-[#78716c]">Self-improvement & growth</p>
              </div>
            </div>
          </div>

          {/* Connect With Me */}
          <div className="mt-12 rounded-3xl border border-[#e7e5e4] bg-white p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-[#292524]">
              Connect With Me 💕
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com/@emmaxolouise"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#ef4444] px-6 py-3 font-semibold text-white shadow-md shadow-[#ef4444]/20 transition-all hover:bg-red-600"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://instagram.com/emmaxolouise"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#fb7185] px-6 py-3 font-semibold text-white shadow-md shadow-[#fb7185]/20 transition-all hover:bg-[#f43f5e]"
              >
                <Camera className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@emmaxolouisee"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#292524] px-6 py-3 font-semibold text-white transition-all hover:bg-[#44403c]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://pinterest.co.uk/missemmaxo7"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#ef4444] px-6 py-3 font-semibold text-white transition-all hover:bg-red-600"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
                Pinterest
              </a>
              <a
                href="https://open.spotify.com/user/fabrad7"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#22c55e] px-6 py-3 font-semibold text-white transition-all hover:bg-green-600"
              >
                <Music className="h-5 w-5" />
                Spotify
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
