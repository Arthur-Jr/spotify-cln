import Link from 'next/link';
import PlayButton from './PlayButton';

interface props {
  text: string,
  cardTilte: string
}

export default function Card({ text, cardTilte }: props) {
  return (
    <Link
      href="#"
      className="group flex flex-col items-center p-4 pb-1 h-64 w-44 rounded-md bg-zinc-700/20 hover:bg-zinc-700/40 text-selected-color"
    >
      <div
        className="flex w-[145px] h-[145px] rounded-md shadow-lg bg-[url('../../public/album-cover-2.jpg')] bg-cover shadow-black/70"
      >
        <PlayButton className="w-12 h-12 self-end mb-2"/>
      </div>

      <div className="flex flex-col w-full mt-4 text-start">
        <span className="font-semibold">{ cardTilte }</span>

        <p className="w-32 mt-1 text-sm">
          { text }
        </p>
      </div>
    </Link>
  );
};
