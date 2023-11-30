import Header from './Header';
import MadeForYou from './MadeForYou';
import MostListened from './MostListened';
import RecentlyPlayed from './RecentlyPlayed';

export default function Main() {
  return (
    <section
      className="flex flex-col mt-2 mr-2 min-w-[510px] w-full rounded-lg bg-gradient-to-t from-zinc-800/20 to-zinc-800/90"
    >
      <div className="flex flex-col w-full h-full pl-6 pr-3 pb-3 overflow-y-scroll invisible main-content">
        <Header />
        <h1 className="text-selected-color text-3xl font-bold visible">Good Afternoon</h1>
        <MostListened />
        <MadeForYou />
        <RecentlyPlayed />
      </div>
    </section>
  );
};
