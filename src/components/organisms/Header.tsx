import CrunchyrollLogo from '../atoms/CrunchyrollLogo';
import { HeaderNavBar } from '../molecules/HeaderNavBar';
import { HeaderOptions } from '../molecules/HeaderOptions';

export function Header() {
  return (
    <header className="bg-zinc-900 flex justify-between h-[60px] flex-1">
      <div className="flex">
        <CrunchyrollLogo />
        <HeaderNavBar />
      </div>
      <HeaderOptions />
    </header>
  );
}
