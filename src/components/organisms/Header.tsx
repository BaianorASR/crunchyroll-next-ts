import LogoImage from '../../assets/images/logo_beta.svg';

export function Header() {
  return (
    <header className="bg-zinc-900 flex justify-between h-[60px] flex-1">
      <div className="flex">
        <figure className="flex items-center px-[25px] fill-orange-600 hover:fill-white transition-colors">
          <div className="">
            <LogoImage className="w-[170px]" />
          </div>
        </figure>
        <nav className="flex items-center">
          <ul className="text-zinc-300 flex">
            <li className="">
              <span className="px-4 py-5">Navegar</span>
            </li>
            <li className="">
              <span className="px-4 py-5">Mangá</span>
            </li>
            <li className="">
              <span className="px-4 py-5">Jogos</span>
            </li>
            <li className="">
              <span className="px-4 py-5">Notícias</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-2 items-center">
        <div>Premium</div>
        <div>Search</div>
        <div>Fila</div>
        <div>User</div>
      </div>
    </header>
  );
}
