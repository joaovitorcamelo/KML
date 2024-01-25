import type { Metadata } from 'next';
import {
  PaperAirplaneIcon,
  TrashIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Menu',
};

type ButtonItem = {
  Icon: React.ReactNode;
  action: string;
  description: string;
  nextUrl: string;
};

const buttonsList: ButtonItem[] = [
  {
    Icon: <DocumentPlusIcon className="h-12 w-auto" />,
    action: 'Criar/Atualizar',
    description: 'Crie novas planilhas ou atualize as existentes',
    nextUrl: '/create',
  },
  {
    Icon: <PaperAirplaneIcon className="h-12 w-auto" />,
    action: 'Enviar',
    description: 'Envie algumas ou todas planilhas',
    nextUrl: '/send',
  },
  {
    Icon: <TrashIcon className="h-12 w-auto" />,
    action: 'Deletar',
    description: 'Delete algumas ou todas planilhas',
    nextUrl: '/delete',
  },
];

export default function Menu() {
  return (
    <main className="flex flex-col items-center gap-16">
      {buttonsList.map(({ Icon, action, description, nextUrl }) => (
        <div
          className="flex flex-col-reverse xl:grid xl:grid-cols-2 justify-center items-center gap-10  "
          key={action}
        >
          <Link
            className="flex flex-row grow gap-8 justify-center items-center w-[40vw] min-w-[600px] py-4 px-8 border border-commonBorder rounded-md text-xl tracking-wide hover:bg-brandHover hover:text-brandText hover:border-brandHover text-center"
            href={nextUrl}
          >
            {Icon}
            {action}
          </Link>
          <span className="text-subText text-lg text-nowrap text-center">
            {description}
          </span>
        </div>
      ))}
    </main>
  );
}
