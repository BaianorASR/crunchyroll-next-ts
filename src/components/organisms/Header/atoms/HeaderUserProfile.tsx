import Image from 'next/image';
import React from 'react';

import { DropdownIcon, HimeIcon } from '../../../../assets/images';

export default function HeaderUserProfile() {
  return (
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
  );
}
