import { Bell, ChevronLeft, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-4 sticky z-10 visible">
      <div className="flex items-center text-main-color gap-2">
        <button type="button" className="p-[4.5px] rounded-full bg-zinc-950/50 hover:cursor-not-allowed">
          <ChevronLeft />
        </button>

        <button type="button" className="p-[4.5px] rounded-full bg-zinc-950/50 hover:cursor-not-allowed">
          <ChevronRight />
        </button>
      </div>

      <div className="flex gap-2 text-selected-color items-center">
        <Link
          href="/original"
          target="_blank"
          className="py-2 px-4 text-sm font-semibold rounded-full bg-zinc-950/70 hover:scale-105 hover:bg-zinc-950/90"
        >
          Original version print
        </ Link>

        <button type="button" className="p-2 rounded-full bg-zinc-950/70 hover:scale-110 hover:bg-zinc-950/90" title="What's New">
          <Bell width={18} height={18} />
        </button>

        <button type="button" className="p-2 rounded-full bg-zinc-950/70 hover:scale-110 hover:bg-zinc-950/90" title="User">
          <User width={18} height={18} />
        </button>
      </div>
    </header>
  );
};