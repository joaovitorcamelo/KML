import type { Metadata } from 'next';
import {
  PaperAirplaneIcon,
  TrashIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

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
    Icon: <DocumentPlusIcon className="w-7 inline-block" />,
    action: 'Criar/Atualizar',
    description: 'Crie novas planilhas ou atualize as existentes',
    nextUrl: '/create',
  },
  {
    Icon: <PaperAirplaneIcon className="w-7 inline-block" />,
    action: 'Enviar',
    description: 'Envie algumas ou todas planilhas',
    nextUrl: '/send',
  },
  {
    Icon: <TrashIcon className="w-7 inline-block" />,
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
            className={clsx(
              'w-[40vw] min-w-[600px] py-12 px-24 text-xl',
              'button',
            )}
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
