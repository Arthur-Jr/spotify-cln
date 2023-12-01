import { HomeIcon, Search } from 'lucide-react';
import Link from 'next/link';
import PlaylistSection from './PlaylistSection';

export default function Aside() {
  return (
    <aside className="flex flex-col px-2 pt-2 min-w-[340px] min-h-[610px] text-main-color">
      <section className="flex flex-col gap-6 bg-second-color py-5 pl-5 rounded-lg w-full h-28">
        <Link href="#" className="flex w-full gap-4 text-selected-color font-semibold">
          <HomeIcon />
          Home
        </Link>
        
        <Link href="#" className="flex w-full gap-4 hover:text-selected-color font-semibold">
          <Search />
          Search
        </Link>
      </section>
      
      <PlaylistSection />
    </aside>
  )
};
