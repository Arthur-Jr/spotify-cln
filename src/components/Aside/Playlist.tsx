import { List, Search } from 'lucide-react';
import Image from 'next/image';
import albumCover from '../../../public/album-cover.png';

export default function Playlist() {
  const playlists = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="flex flex-col px-2 overflow-y-auto playlist-section h-full">
      <div className="flex justify-between visible px-1 mb-2">
        <button type="button" className="flex items-center justify-center rounded-full h-8 w-8 p-1 hover:bg-zinc-800 hover:text-selected-color">
          <Search width={19} />
        </button>

        <button type="button" className="flex gap-1 items-center text-sm text-zinc-400 hover:scale-105 hover:text-selected-color">
          Recents
          <List width={19} />
        </button>
      </div>

      { playlists.map((num) => (
        <button key={ num } type="button" className="flex visible py-2 px-2 gap-3 rounded-md hover:bg-zinc-800/50">
          <Image src={ albumCover } alt="playlist cover" width={45} height={45} className="rounded-sm"/>

          <div className="flex flex-col gap-1">
            <span className="text-start font-semibold text-selected-color">{ `Playlist ${num}` }</span>
            <span className="text-start text-sm font-medium">Playlist · AJ</span>
          </div>
        </button>
      )) }
    </section>
  );
};
