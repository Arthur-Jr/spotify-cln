import { Pause, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import ControlLine from './ControlLine';

export default function MainControl() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto gap-2">
      <div className="flex items-center gap-6 text-main-color">
        <Shuffle size={19} className="hover:text-selected-color" />
        <SkipBack size={19} className="hover:text-selected-color" />
        <Pause className="flex items-center justify-center rounded-full p-2 bg-selected-color text-black hover:scale-105" size={33} />
        <SkipForward size={19} className="hover:text-selected-color" />
        <Repeat size={19} className="hover:text-selected-color" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-main-color cursor-default">0:40</span>
        <ControlLine />
        <span className="text-xs text-main-color cursor-default">2:40</span>
      </div>
    </section>
  );
};
