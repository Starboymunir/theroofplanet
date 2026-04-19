'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

/* ── Gallery images (optimized WebP, ~300-600KB each) ── */
const galleryImages: { src: string; alt: string }[] = [
  { src: '/gallery/optimized/Photo_6553721_DJI_121_jpg_8200583_0_2022726152432_photo_original.jpg.webp', alt: 'Aerial roof inspection — Houston project' },
  { src: '/gallery/optimized/Photo_6553727_DJI_127_jpg_7254784_0_2022726152644_photo_original.jpg.webp', alt: 'Drone roof survey — Houston project' },
  { src: '/gallery/optimized/dji_fly_20221021_124506_190_1666374320863_photo.webp', alt: 'Completed roof — October 2022' },
  { src: '/gallery/optimized/dji_fly_20221021_124522_191_1666374336816_photo.webp', alt: 'Aerial view — October 2022' },
  { src: '/gallery/optimized/dji_fly_20221103_102014_204_1667488833682_photo.webp', alt: 'Roof restoration — November 2022' },
  { src: '/gallery/optimized/dji_fly_20221109_110038_218_1668013262751_photo.webp', alt: 'Shingle replacement — November 2022' },
  { src: '/gallery/optimized/dji_fly_20221214_122242_226_1671042175529_photo.webp', alt: 'New roof installation — December 2022' },
  { src: '/gallery/optimized/dji_fly_20221214_122316_227_1671042209767_photo.webp', alt: 'Roofing project — December 2022' },
  { src: '/gallery/optimized/dji_fly_20221221_122050_249_1671646863334_photo.webp', alt: 'Completed project — December 2022' },
  { src: '/gallery/optimized/dji_fly_20221221_122120_251_1671646893393_photo.webp', alt: 'Drone inspection — December 2022' },
  { src: '/gallery/optimized/dji_fly_20221221_122134_252_1671646911823_photo.webp', alt: 'Roof detail — December 2022' },
  { src: '/gallery/optimized/dji_fly_20230119_111406_304_1674148464613_photo.webp', alt: 'Roof replacement — January 2023' },
  { src: '/gallery/optimized/dji_fly_20230119_111454_305_1674148509134_photo.webp', alt: 'Aerial view — January 2023' },
  { src: '/gallery/optimized/dji_fly_20230320_142730_330_1679340474084_photo.webp', alt: 'Spring project — March 2023' },
  { src: '/gallery/optimized/dji_fly_20230322_121938_338_1679505632717_photo.webp', alt: 'Completed roof — March 2023' },
  { src: '/gallery/optimized/dji_fly_20230322_121946_339_1679505646355_photo.webp', alt: 'Roofing detail — March 2023' },
  { src: '/gallery/optimized/dji_fly_20230327_124904_357_1679939361183_photo.webp', alt: 'New shingles — March 2023' },
  { src: '/gallery/optimized/dji_fly_20230524_100850_397_1684940948030_photo.webp', alt: 'Roof installation — May 2023' },
  { src: '/gallery/optimized/dji_fly_20230524_100904_398_1684940959328_photo.webp', alt: 'Aerial shot — May 2023' },
  { src: '/gallery/optimized/dji_fly_20230524_101208_404_1684941175925_photo.webp', alt: 'Completed work — May 2023' },
  { src: '/gallery/optimized/dji_fly_20230619_103014_412_1687188627332_photo.webp', alt: 'Summer project — June 2023' },
  { src: '/gallery/optimized/dji_fly_20230619_103100_413_1687188674464_photo.webp', alt: 'Roof restoration — June 2023' },
  { src: '/gallery/optimized/dji_fly_20230802_144030_431_1691005247385_photo.webp', alt: 'New roof — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230802_144044_432_1691005260020_photo.webp', alt: 'Aerial view — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230804_114426_445_1691167479028_photo.webp', alt: 'Roofing project — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230804_114522_446_1691167536574_photo.webp', alt: 'Completed roof — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230809_131752_462_1691605092569_photo.webp', alt: 'Drone inspection — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230809_131804_463_1691605097666_photo.webp', alt: 'Roof detail — August 2023' },
  { src: '/gallery/optimized/dji_fly_20230809_131818_464_1691605111016_photo.webp', alt: 'Aerial overview — August 2023' },
  { src: '/gallery/optimized/dji_fly_20231004_092952_493_1696429808720_photo.webp', alt: 'Fall project — October 2023' },
  { src: '/gallery/optimized/dji_fly_20231004_093014_494_1696429830930_photo.webp', alt: 'Roof replacement — October 2023' },
  { src: '/gallery/optimized/dji_fly_20231004_093148_498_1696429925128_photo.webp', alt: 'Completed work — October 2023' },
  { src: '/gallery/optimized/dji_fly_20231022_090544_510_1697983572125_photo.webp', alt: 'New installation — October 2023' },
  { src: '/gallery/optimized/dji_fly_20231022_090622_512_1697983622391_photo.webp', alt: 'Aerial shot — October 2023' },
  { src: '/gallery/optimized/dji_fly_20231129_114548_563_1701279963101_photo.webp', alt: 'Winter project — November 2023' },
  { src: '/gallery/optimized/dji_fly_20231129_114616_565_1701279997359_photo.webp', alt: 'Roof restoration — November 2023' },
  { src: '/gallery/optimized/dji_fly_20231129_114638_566_1701280019429_photo.webp', alt: 'Completed roof — November 2023' },
  { src: '/gallery/optimized/dji_fly_20240212_120842_589_1707761345153_photo.webp', alt: 'New roof — February 2024' },
  { src: '/gallery/optimized/dji_fly_20240212_120906_590_1707761382854_photo.webp', alt: 'Aerial view — February 2024' },
  { src: '/gallery/optimized/dji_fly_20240212_120948_592_1707761430771_photo.webp', alt: 'Roofing detail — February 2024' },
  { src: '/gallery/optimized/dji_fly_20240212_121008_594_1707761456513_photo.webp', alt: 'Completed project — February 2024' },
  { src: '/gallery/optimized/dji_fly_20240306_151628_613_1709759855090_photo.webp', alt: 'Spring project — March 2024' },
  { src: '/gallery/optimized/dji_fly_20240306_151714_617_1709759885152_photo.webp', alt: 'Roof replacement — March 2024' },
  { src: '/gallery/optimized/dji_fly_20240501_120050_646_1714582909969_photo.webp', alt: 'New installation — May 2024' },
  { src: '/gallery/optimized/dji_fly_20240501_120158_650_1714582963949_photo.webp', alt: 'Aerial view — May 2024' },
  { src: '/gallery/optimized/dji_fly_20240501_120224_651_1714582968872_photo.webp', alt: 'Completed roof — May 2024' },
  { src: '/gallery/optimized/dji_fly_20240924_174748_744_1727218147156_photo.webp', alt: 'Fall project — September 2024' },
  { src: '/gallery/optimized/dji_fly_20240924_174822_745_1727218141631_photo.webp', alt: 'Roof restoration — September 2024' },
  { src: '/gallery/optimized/dji_fly_20240924_174840_746_1727218183678_photo.webp', alt: 'Aerial overview — September 2024' },
  { src: '/gallery/optimized/dji_fly_20241007_115018_756_1728319841924_photo.webp', alt: 'Latest project — October 2024' },
  { src: '/gallery/optimized/dji_fly_20241007_115214_757_1728319956956_photo.webp', alt: 'Completed work — October 2024' },
];

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
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
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
