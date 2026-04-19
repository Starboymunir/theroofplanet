'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

/* ── Gallery images — add filenames from public/gallery/ here ── */
const galleryImages = [
  // When you add photos to public/gallery/, list them here like:
  // { src: '/gallery/photo1.jpg', alt: 'Roof replacement in Houston' },
  // { src: '/gallery/photo2.jpg', alt: 'Drone shot of new shingle roof' },
] as { src: string; alt: string }[];

/* ── Placeholder images while waiting for real photos ── */
const placeholderCount = 0; // Set to 0 once real images are added

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = galleryImages;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden pt-32 lg:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#131f36] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#a78bfa] text-sm font-semibold tracking-wider uppercase mb-6">
              <Camera className="w-4 h-4" />
              Our Work
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-4">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]">Gallery</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Browse aerial drone photos and completed projects from our roofing &amp; restoration work across Texas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1d32]">
        <div className="w-[92%] xl:w-[88%] 2xl:w-[82%] mx-auto">
          {images.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-[#7c3aed]/40 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-3">Gallery Coming Soon</h2>
              <p className="text-white/50 max-w-md mx-auto">
                We&apos;re uploading our collection of completed project photos. Check back soon to see our work!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium truncate">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && images[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="relative max-w-5xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1920}
                height={1080}
                className="object-contain w-full h-full max-h-[85vh] rounded-lg"
              />
              <p className="text-center text-white/70 text-sm mt-3">
                {images[lightboxIndex].alt} — {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
