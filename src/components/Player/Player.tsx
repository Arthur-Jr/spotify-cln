import MainControl from './MainControl';
import SecondControl from './SecondControl';
import SongData from "./SongData";

export default function Player() {
  return (
    <footer className="flex mx-2 px-2 pt-3 items-center min-w-[950px]">
      <SongData />
      <MainControl />
      <SecondControl/>
    </ footer>
  );
};
