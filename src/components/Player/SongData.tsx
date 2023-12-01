import { Heart } from 'lucide-react';
import Image from 'next/image';
import albumCover from '../../../public/album-cover-1.jpg';

export default function SongData() {
  return (
    <section className="flex items-center gap-4 mr-auto">
      <Image src={ albumCover } alt="album cover" width={55} height={55} className="rounded-sm"/>

      <div className="flex flex-col">
        <span className="text-sm text-start text-selected-color hover:underline underline-offset-1 hover:cursor-pointer">Blue</span>
        <span className="text-main-color text-xs hover:underline underline-offset-1 hover:cursor-pointer">Yoasobi</span>
      </div>

      <Heart size={17} className="ml-4 text-main-color hover:cursor-pointer hover:scale-105"/>
    </section>
  );
};
