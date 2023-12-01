import { twMerge } from 'tailwind-merge';

interface props {
  div1ClassName?: string,
  div2ClassName?: string, 
};

export default function ControlLine({ div1ClassName, div2ClassName }: props) {
  return (
    <div className={ twMerge("h-1 rounded-full w-[30vw] bg-zinc-600 group", div1ClassName) }>
      <div className={ twMerge("flex items-center justify-end h-1 w-[30%] bg-zinc-200 group-hover:bg-main-green", div2ClassName) }>
        <button type="button" className="rounded-full p-[0.40rem] bg-slate-200 invisible group-hover:visible hover:cursor-default"/>
      </div>
    </div>
  );
};
