import React from 'react';

import { DropdownIcon } from '../../../../assets/images';

type HeaderNavBarItemProps = {
  value: string;
  dropdown?: boolean;
};

export function HeaderNavBarItem({ dropdown, value }: HeaderNavBarItemProps) {
  return (
    <a className="hover:bg-black flex items-center h-full px-4">
      <span>{value}</span>
      {dropdown && (
        <div className="pl-1">
          <DropdownIcon className="fill-zinc-300 w-6 h-6" />
        </div>
      )}
    </a>
  );
}
