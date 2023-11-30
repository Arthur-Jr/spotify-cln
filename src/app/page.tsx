import Aside from '@/components/Aside/Aside';
import Main from '@/components/Main-Content/Main';
import { Bell, ChevronLeft, ChevronRight, Play, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import albumCover from '../../public/album-cover.png';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex h-[584px]">
        <Aside />

        <Main />
      </div>
    </main>
  )
}
