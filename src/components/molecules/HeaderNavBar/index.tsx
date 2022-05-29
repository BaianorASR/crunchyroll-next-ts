import React from 'react';

import { DropdownIcon } from '../../../assets/images';

export function HeaderNavBar() {
  return (
    <nav className=" text-zinc-300 flex items-center justify-center flex-1 antialiased font-medium transition-colors cursor-pointer">
      <a className="hover:bg-black flex items-center h-full px-4">
        <span className="">Navegar</span>
        <div className="pl-1">
          <DropdownIcon className="fill-zinc-300 w-6 h-6" />
        </div>
      </a>
      <a className="hover:bg-black flex items-center h-full px-4">
        <span className="">Mangá</span>
      </a>
      <a className="hover:bg-black flex items-center h-full px-4">
        <span className="">Jogos</span>
      </a>
      <a className="hover:bg-black flex items-center h-full px-4">
        <span className="">Notícias</span>
        <div className="pl-1">
          <DropdownIcon className="fill-zinc-300 w-6 h-6" />
        </div>
      </a>
    </nav>
  );
}
