import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import albumCover from '../../../public/album-cover-1.jpg';
import PlayButton from '../PlayButton';

export default function MostListened() {
  const playlists = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2 text-selected-color visible">
      { playlists.map((num) => (
        <Link
          key={num}
          href="#"
          className="flex items-center gap-2 rounded overflow-hidden bg-zinc-400/20 hover:bg-zinc-400/30 group"
        >
          <Image src={ albumCover } alt="Album cover" width={48} height={48}/>
          <span className="text-sm font-bold">THE BOOK 2</span>

          <PlayButton />
        </Link>
      )) }
    </div>
  );
};
