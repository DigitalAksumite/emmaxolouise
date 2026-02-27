import Link from "next/link";
import Image from "next/image";
import { LatestVideos } from "@/components/latest-videos";
import { SiteFooter } from "@/components/site-footer";
import { Instagram, Music2, Play, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* Hero Section - Clean & Professional */}
      <section className="relative overflow-hidden">
        {/* Subtle background gradient with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f8]/60 via-[#f5f3ff]/30 to-[#fafaf9]" />
        
        {/* Decorative floating shapes */}
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#fb7185]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-[#c4b5fd]/15 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-8 lg:pt-12 lg:pb-12">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Title */}
              <h1 className="text-6xl font-bold tracking-tight text-[#292524] sm:text-7xl lg:text-8xl">
                <span className="block">emma</span>
                <span className="block bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#fb7185] bg-clip-text text-transparent">xolouise</span>
              </h1>

              {/* Badge - Floating animation */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-md animate-float">
                <span className="text-lg">💌</span>
                <span className="text-sm font-medium text-[#44403c]">A digital diary of my life</span>
              </div>

              {/* Subtitle */}
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#44403c] lg:max-w-sm">
                Productivity, lifestyle, fashion & motivating you to be your better self. 
                Edinburgh University student sharing my love of the city.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="/videos"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#fb7185] px-6 text-base font-semibold text-white shadow-lg shadow-[#fb7185]/25 transition-all hover:bg-[#f43f5e] hover:shadow-xl hover:shadow-[#fb7185]/30"
                >
                  <Play className="h-5 w-5" />
                  Watch Videos
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://www.youtube.com/@emmaxolouise"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[#e7e5e4] bg-white px-6 text-base font-semibold text-[#44403c] transition-all hover:border-[#fb7185] hover:text-[#fb7185]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Subscribe
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
                <a
                  href="https://youtube.com/@emmaxolouise"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/emmaxolouise"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#fb7185] transition-all hover:bg-[#fb7185] hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@emmaxolouisee"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#292524] transition-all hover:bg-[#292524] hover:text-white"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://pinterest.co.uk/missemmaxo7"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/user/fabrad7"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#22c55e] transition-all hover:bg-[#22c55e] hover:text-white"
                >
                  <Music2 className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right: Emma's Photo */}
            <div className="relative lg:h-[520px] lg:mt-2">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-3xl bg-[#fdf2f8]">
                <Image
                  src="/images/emma.jpg"
                  alt="Emma xolouise"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-[#c4b5fd]/20 backdrop-blur-sm" />
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#fda4af]/20 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="border-t border-[#e7e5e4] bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-medium text-[#fb7185]">Fresh Content</span>
              <h2 className="mt-1 text-3xl font-bold text-[#292524]">Latest Videos</h2>
              <p className="mt-2 text-[#78716c]">New uploads every week 💌</p>
            </div>
            <Link
              href="/videos"
              className="group hidden items-center gap-2 text-sm font-semibold text-[#44403c] transition-colors hover:text-[#fb7185] sm:flex"
            >
              View all videos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <LatestVideos />

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 rounded-full bg-[#fafaf9] px-5 py-2.5 text-sm font-semibold text-[#44403c]"
            >
              View all videos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
