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
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
            padding: '40px',
            boxSizing: 'border-box',
          }}
        >
          <button
            className="modal-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
          >
            ×
          </button>
          <div style={{ position: 'relative', maxWidth: '70vw', maxHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={selected} 
              alt="" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain',
                borderRadius: '4px',
              }} 
            />
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

        .modal-close-btn {
          position: fixed;
          top: 40px;
          right: 40px;
          background: rgba(0,0,0,0.7);
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
          z-index: 1001;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .modal-close-btn:hover {
          background: rgba(0,0,0,0.9);
        }

        @media (max-width: 770px) {
          .modal-close-btn {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        }

        @media (max-width: 1220px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
        }

        @media (max-width: 770px) {
          .gallery {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
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