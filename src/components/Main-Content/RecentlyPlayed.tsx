import Link from 'next/link';
import Card from '../Card';

export default function RecentlyPlayed() {
  const cards = [1, 2, 3, 4, 5];

  return (
    <section className="flex flex-col mt-7 visible">
      <div className="flex items-center w-full">
        <h2 className="text-xl font-bold text-selected-color">Recently Played</h2>

        <Link href="#" className="ml-auto text-sm font-bold text-main-color hover:underline underline-offset-1">Show all</Link>
      </div>

      <div className="grid grid-cols-3 min-[1084px]:grid-cols-4 xl:grid-cols-5 mt-5 gap-5 xl:w-[950px]">
        { cards.map((num) => (
          <Card key={num} cardTilte="THE BOOK 3" text="Yoasobi" />
        )) }
      </div>
    </section>
  );
};
