import Aside from '@/components/Aside/Aside';
import Main from '@/components/Main-Content/Main';
import Player from '@/components/Player/Player';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex xl:h-full flex-grow min-h-[610px] max-h-[88vh]">
        <Aside />
        <Main />
      </div>

      <Player />
    </main>
  )
}
