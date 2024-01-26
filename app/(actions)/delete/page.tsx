import type { Metadata } from 'next';
import { TrashIcon } from '@heroicons/react/24/outline';
import ActionTemplate from '@/app/ui/ActionTemplate';

export const metadata: Metadata = {
  title: 'Deletar',
};

export default function Page() {
  return (
    <ActionTemplate
      content="Deletar"
      descriptionAll="Deleta a planilha de cada ID existente em ‘KML’"
      Icon={<TrashIcon className="w-7 inline-block" />}
    />
  );
}
