import { Play } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';


export default function PlayButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className={ twMerge("flex items-center justify-center w-9 h-9 pl-1 ml-auto mr-2 rounded-full bg-main-green shadow-lg text-black shadow-zinc-900/80 invisible group-hover:visible hover:scale-105", props.className) }
    >
      <Play width={18} height={18} />
    </button>
  );
};
