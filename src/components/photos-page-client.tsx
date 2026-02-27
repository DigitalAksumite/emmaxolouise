"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

interface Photo {
  src: string;
  alt: string;
}

interface PhotosPageClientProps {
  photos: Photo[];
}

export function PhotosPageClient({ photos }: PhotosPageClientProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedPhoto(index);
  const closeLightbox = () => setSelectedPhoto(null);

  const goToPrevious = () => {
    if (selectedPhoto === null) return;
    setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
  };

  const goToNext = () => {
    if (selectedPhoto === null) return;
    setSelectedPhoto(selectedPhoto === photos.length - 1 ? 0 : selectedPhoto + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]" onKeyDown={handleKeyDown}>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#c4b5fd]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3">
              <span className="text-4xl">📸</span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Photos
              </h1>
            </div>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90">
              A curated collection of moments, memories & life in frames 💕
            </p>
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {photos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Camera className="mb-4 h-16 w-16 text-[#c4b5fd]" />
              <h3 className="mb-2 text-xl font-semibold text-[#292524]">
                Photos Coming Soon
              </h3>
              <p className="max-w-md text-[#78716c]">
                Add your photos to <code className="rounded bg-[#f5f5f4] px-2 py-1 text-sm">public/images/photos/</code> folder
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full rounded-2xl transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 opacity-0 shadow-lg transition-all duration-300 group-hover:bg-white/90 group-hover:opacity-100">
                      <Camera className="h-6 w-6 text-[#c4b5fd]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />

      {/* Lightbox */}
      {selectedPhoto !== null && photos.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation - Previous */}
          {photos.length > 1 && (
            <button
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Navigation - Next */}
          {photos.length > 1 && (
            <button
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            {photos[selectedPhoto].alt && (
              <p className="mt-4 text-center text-white/80">
                {photos[selectedPhoto].alt}
              </p>
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-white/80">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </main>
  );
}
