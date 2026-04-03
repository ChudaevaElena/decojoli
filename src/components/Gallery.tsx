'use client';

import { useState } from 'react';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div
        className="gallery"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => setSelected(img.src)}
            style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}
          >
            <img
              src={img.src}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                background: 'none',
                border: 'none',
                fontSize: '32px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <img src={selected} alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item {
          aspect-ratio: 4/5;
        }

        .gallery-item:hover img {
          transform: scale(1.02);
        }

        @media (max-width: 1220px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
        }

        @media (max-width: 770px) {
          .gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}