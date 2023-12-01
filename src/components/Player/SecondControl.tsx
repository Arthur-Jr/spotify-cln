import { Maximize2, Menu, Mic2, MonitorSmartphone, PlaySquare, Volume2 } from 'lucide-react';
import ControlLine from './ControlLine';

export default function SecondControl() {
  return (
    <section className="flex gap-[0.9rem] items-center text-main-color">
      <PlaySquare size={18} className="hover:cursor-pointer hover:text-selected-color hover:scale-105" />
      <Mic2 size={18} className="hover:cursor-pointer hover:text-selected-color hover:scale-105" />
      <Menu size={18} className="hover:cursor-pointer hover:text-selected-color hover:scale-105" />
      <MonitorSmartphone size={18} className="hover:text-selected-color" />

      <div className="flex items-center gap-2 group">
        <Volume2 size={18} />
        <ControlLine div1ClassName="w-[5.8rem]" div2ClassName="w-full"/>
      </div>
      <Maximize2 size={18} className="hover:cursor-pointer hover:text-selected-color hover:scale-105" />
    </section>
  );
};
