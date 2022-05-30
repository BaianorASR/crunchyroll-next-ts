import React, { useEffect, useState } from 'react';

import { HamburgerIcon } from '../../../../assets/images';
import { useWidth } from '../../../../hooks/useWidth';
import { HeaderNavBarItem } from '../atoms/HeaderNavItem';

export function HeaderNavBar() {
  const width = useWidth();
  const [isNavOpen, setIsNavOpen] = useState(width > 640);
  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);

  useEffect(() => {
    if (width > 640) {
      setIsNavOpen(true);
      if (isVisibleHamburger) setIsVisibleHamburger(false);
    } else if (!isVisibleHamburger) setIsVisibleHamburger(true);
  }, [isVisibleHamburger, width]);

  return (
    <>
      {isVisibleHamburger && (
        <div
          className="-order-1 flex items-center justify-center px-3"
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <HamburgerIcon className="fill-zinc-300 w-6" />
        </div>
      )}
      {isNavOpen && (
        <nav className="text-zinc-300 absolute sm:relative sm:flex-row mt-[60px] bg-zinc-900 sm:bg-none sm:mt-0 sm:items-center sm:justify-center sm:w-auto sm:h-auto flex flex-col flex-1 w-screen h-screen antialiased font-medium transition-colors cursor-pointer">
          <HeaderNavBarItem value="Navegar" dropdown />
          <HeaderNavBarItem value="Manga" />
          <HeaderNavBarItem value="Jogos" />
          <HeaderNavBarItem value="Notícias" dropdown />
        </nav>
      )}
    </>
  );
}
