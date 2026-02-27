import { Heart, Instagram, Music2, Mail, Linkedin, Globe } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e7e5e4] bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Row 1: Brand + Social Icons */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fb7185]">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#292524]">emmaxolouise</span>
          </div>

          {/* Social Icons - Compact */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@emmaxolouise"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white"
              aria-label="YouTube"
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
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@emmaxolouisee"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf2f8] text-[#292524] transition-all hover:bg-[#292524] hover:text-white"
              aria-label="TikTok"
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
              aria-label="Pinterest"
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
              aria-label="Spotify"
            >
              <Music2 className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Row 2: Single line compact info */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-base text-[#78716c] sm:flex-row sm:gap-5">
          <span>
            Built by <span className="font-semibold text-[#d97706]">Digital Aksumite</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:hello.digitalaksumite@gmail.com" className="flex items-center gap-1.5 hover:text-[#d97706]">
            <Mail className="h-4 w-4 text-[#d97706]" />
            hello.digitalaksumite@gmail.com
          </a>
          <span className="hidden sm:inline">·</span>
          <span>© {currentYear} emmaxolouise · All rights reserved</span>
        </div>

        {/* Digital Aksumite Social - Small inline row */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/digitalaksumite/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706] transition-all hover:bg-[#d97706] hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/digitalaksumite/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706] transition-all hover:bg-[#d97706] hover:text-white"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/digitalaksumite"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706] transition-all hover:bg-[#d97706] hover:text-white"
            aria-label="X"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@digitalaksumite"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706] transition-all hover:bg-[#d97706] hover:text-white"
            aria-label="TikTok"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://digitalaksumite.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef3c7] text-[#d97706] transition-all hover:bg-[#d97706] hover:text-white"
            aria-label="Website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
