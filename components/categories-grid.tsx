"use client";

import { useState } from "react";
import { Lightbox } from "./lightbox";
import type { Category, DriveImage } from "@/lib/google-drive";

interface Props {
  categories: Category[];
}

export function CategoriesGrid({ categories }: Props) {
  const [lightboxImages, setLightboxImages] = useState<DriveImage[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: DriveImage[], index: number) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-red" />
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.images.length} pieces</p>
                </div>

                <div className="grid grid-cols-3 gap-1 p-1">
                  {category.images.slice(0, 6).map((image, idx) => (
                    <img
                      key={idx}
                      src={image.thumbnailUrl}
                      alt={image.title}
                      className="w-full aspect-square object-cover cursor-pointer hover:brightness-75 transition"
                      onClick={() => openLightbox(category.images, idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Lightbox 
        images={lightboxImages} 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)}
        initialIndex={currentIndex}
      />
    </>
  );
}