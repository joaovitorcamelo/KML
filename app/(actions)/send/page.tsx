import type { Metadata } from 'next';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import ActionTemplate from '@/app/ui/ActionTemplate';

export const metadata: Metadata = {
  title: 'Enviar',
};

export default function Page() {
  return (
    <ActionTemplate
      content="Enviar"
      descriptionAll="Envia uma planilha para o e-mail de cada ID existente em ‘KML’"
      Icon={<PaperAirplaneIcon className="w-10 h-auto inline-block" />}
    />
  );
}
