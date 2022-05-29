import Image from 'next/image';
import React from 'react';

import {
  DropdownIcon,
  FilaIcon,
  HimeIcon,
  PremiumIcon,
  SearchIcon,
} from '../../../assets/images';

export function HeaderOptions() {
  return (
    <div className="flex items-center justify-center transition-all">
      <div className="flex flex-1 h-full pl-1 pr-2 w-[95.25px] items-center hover:bg-black">
        <div className="h-fit flex px-1">
          <PremiumIcon className="fill-orange-400 w-6" />
        </div>
        <p className="flex flex-col text-[10px] font-bold text-orange-400 p-1 justify-center">
          TESTE
          <span>GRÁTIS</span>
          <span className="text-zinc-300">PREMIUM</span>
        </p>
      </div>
      <div className="flex w-[60px] h-[60px] p-4 items-center justify-center hover:bg-black">
        <SearchIcon className="fill-zinc-300 w-6" />
      </div>
      <div className="flex w-[60px] h-[60px] p-4 items-center justify-center hover:bg-black">
        <FilaIcon className="fill-zinc-300 w-6" />
      </div>
      <div className="hover:bg-black flex items-center h-full px-4 w-[96px]">
        <Image
          src={HimeIcon}
          width={36}
          height={36}
          layout="fixed"
          className="rounded-full"
          alt="User profile logo"
        />
        <DropdownIcon className="fill-zinc-300 w-6" />
      </div>
    </div>
  );
}
