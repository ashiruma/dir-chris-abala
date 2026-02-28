"use client";

import { useState } from "react";

interface Image {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  type: string;
}

export default function GalleryGrid({ images }: { images: Image[] }) {
  const [lightbox, setLightbox] = useState<Image | null>(null);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setLightbox(img)}
            style={{ cursor: "pointer", overflow: "hidden", borderRadius: "4px", backgroundColor: "#3d2325", aspectRatio: "1", position: "relative" }}
            className="gallery-thumb"
          >
            <img
              src={img.thumbnailUrl}
              alt={img.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.95)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "24px", right: "32px", background: "none", border: "none", color: "#f4f4f4", fontSize: "2em", cursor: "pointer", fontFamily: "'Oswald', sans-serif" }}
          >
            ✕
          </button>

          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "90vh", position: "relative" }}>
            {lightbox.type === "video" ? (
              <iframe
                src={lightbox.url}
                style={{ width: "80vw", height: "70vh", borderRadius: "4px", border: "none" }}
                allow="autoplay"
                allowFullScreen
              />
            ) : (
              <img
                src={lightbox.url}
                alt={lightbox.title}
                style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain", borderRadius: "4px" }}
              />
            )}
            <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#999", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px", marginTop: "12px", textAlign: "center" }}>
              {lightbox.title}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = images.findIndex((i) => i.id === lightbox.id);
              setLightbox(images[(idx - 1 + images.length) % images.length]);
            }}
            style={{ position: "absolute", left: "24px", background: "none", border: "1px solid #16a34a", color: "#16a34a", fontSize: "1.2em", cursor: "pointer", padding: "12px 16px", borderRadius: "4px", fontFamily: "'Oswald', sans-serif" }}
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = images.findIndex((i) => i.id === lightbox.id);
              setLightbox(images[(idx + 1) % images.length]);
            }}
            style={{ position: "absolute", right: "24px", background: "none", border: "1px solid #16a34a", color: "#16a34a", fontSize: "1.2em", cursor: "pointer", padding: "12px 16px", borderRadius: "4px", fontFamily: "'Oswald', sans-serif" }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}