'use client';

import { useState } from 'react';

import { MuseumMap, galleries } from '@/components/museum-map';

export default function Page() {
  const [name, setName] = useState('Arts of the Islamic World, 2nd floor');

  const handleGalleryClick = (galleryName) => {
    setName(galleryName);
  };

  return (
    <section className="container grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
      <div className="">
        <div className="h-96">
          <MuseumMap locationName={name} />
        </div>
        <p className="text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          {name}
        </p>
      </div>
      <div className="flex gap-4">
        <ul>
          {galleries.map((gallery) => (
            <li
              key={gallery.name}
              className="cursor-pointer text-sm text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
              onClick={() => handleGalleryClick(gallery.name)}
            >
              {gallery.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
