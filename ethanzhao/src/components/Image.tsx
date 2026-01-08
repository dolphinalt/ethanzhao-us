// import React from 'react'

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const Image = ({ src, alt, caption }: ImageProps) => {
  return (
    <div className="my-6 items-center justify-center">
      <img src={src} alt={alt} className="w-full rounded-lg shadow-md mb-3" />
      {caption && (
        <p className="text-gray-500 text-xs italic text-center">{caption}</p>
      )}
    </div>
  );
};

export default Image;
