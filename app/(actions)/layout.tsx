import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-24">
      <header className="grid grid-cols-2 gap-1.5 items-center text-subText ">
        <Link className="flex flex-row gap-2 hover:text-brandText" href="/menu">
          <ArrowUturnLeftIcon className="w-7 h-auto" />
          <span className="text-2xl inline-block h-full">Voltar ao Menu</span>
        </Link>
      </header>
      <>{children}</>
    </div>
  );
}
