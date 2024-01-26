import type { Metadata } from 'next';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import ActionTemplate from '@/app/ui/ActionTemplate';

export const metadata: Metadata = {
  title: 'Criar',
};

export default function Page() {
  return (
    <ActionTemplate
      content="Criar/Atualizar"
      descriptionAll="Cria/Atualiza uma planilha para cada ID existente em ‘KML’"
      Icon={<DocumentPlusIcon className="w-7 inline-block" />}
    />
  );
}
