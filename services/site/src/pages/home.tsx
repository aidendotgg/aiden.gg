import { useEffect, useState } from 'react';
import { GridPattern } from '@/components/GridPattern';

export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPageLoad(true);
  }, []);

  function handleInput(e: any) {
    setSearch(e.target.value.replaceAll(' ', '+'));
  }

  function handleEnter(e: any) {
    if (e.key === 'Enter') {
      window.open(`https://duckduckgo.com/?t=lm&q=${search}&ia=web`, '_blank');
      setSearch('');
    }
  }

  return (
    <>
      <main className="flex h-screen flex-col justify-center overflow-x-hidden">
        <GridPattern width={50} height={50} x={-1} y={-1} className="z-[-5]" />
        <div className="max-w-5xl w-full mx-auto">
          <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} font-bold sm:text-6xl text-4xl text-center`}>Welcome back, Aiden 👋</h1>
          <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
            <label htmlFor="search" className="block text-sm font-medium leading-6">
              Search DuckDuckGo
            </label>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                value={search.replaceAll('+', ' ')}
                placeholder="Search..."
                onChange={handleInput}
                onKeyDown={handleEnter}
                className=" pl-2 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
