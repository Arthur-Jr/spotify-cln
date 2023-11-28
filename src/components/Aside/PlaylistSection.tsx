import { ArrowRight, LibraryBig, Plus } from 'lucide-react';
import Link from 'next/link';
import Playlist from './Playlist';

export default function PlaylistSection() {
  return (
    <section className="flex flex-col w-full mt-2 rounded-lg pt-3 h-[455px] bg-second-color">
      <div className="flex items-center justify-between w-full pl-5 pr-5">
        <Link href="#" className="flex gap-2 font-semibold hover:text-selected-color">
          <LibraryBig />
          Your Library
        </Link>
        
        <div className="flex flex-grow justify-end gap-3">
          <button
            type="button"
            className="rounded-full p-1 hover:bg-zinc-900 hover:text-selected-color"
            title="Create playlist or folder"
          >
            <Plus />
          </button>

          <button
            type="button"
            className="rounded-full p-1 hover:bg-zinc-900 hover:text-selected-color"
            title="Show more"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-2 pl-3 pb-3 mt-5">
        <button
          type="button"
          className="rounded-full p-[0.4rem] text-sm font-medium w-20 text-selected-color bg-zinc-800/70 hover:bg-zinc-800 "
        >
          Playlists
        </button>

        <button
          type="button"
          className="rounded-full p-[0.4rem] text-sm font-medium w-[4.5rem] text-selected-color bg-zinc-800/70 hover:bg-zinc-800"
        >
          Artists
        </button>
      </div>

      <Playlist />
    </section>
  )
};
