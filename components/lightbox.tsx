"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: any[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
}

export function Lightbox({ images, isOpen, onClose, initialIndex }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-4xl">
        <X size={40} />
      </button>

      <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} className="absolute left-6 text-white text-5xl">
        <ChevronLeft size={60} />
      </button>

      <img 
        src={current.url} 
        alt={current.title} 
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button onClick={() => setIndex((i) => (i + 1) % images.length)} className="absolute right-6 text-white text-5xl">
        <ChevronRight size={60} />
      </button>
    </div>
  );
}