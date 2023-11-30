import Aside from '@/components/Aside/Aside';
import Main from '@/components/Main-Content/Main';

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
