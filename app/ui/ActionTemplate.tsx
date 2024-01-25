import { PlusIcon } from '@heroicons/react/24/outline';

type propsActionTemplate = {
  content: string;
  descriptionAll: string;
  Icon: React.ReactNode;
};

export default function ActionTemplate({
  content,
  descriptionAll,
  Icon,
}: propsActionTemplate) {
  return (
    <main className="flex flex-col items-center gap-16 min-w-400px">
      <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 xl:gap-x-16 gap-y-8 items-center justify-center">
        <button className="flex flex-row grow gap-8 justify-center items-center w-[40vw] min-w-[600px] py-12 px-16 border border-commonBorder rounded-md text-xl tracking-wide hover:bg-brandHover hover:text-brandText hover:border-brandHover text-center">
          {Icon}
          <span className="inline-block">{content} todos</span>
        </button>
        <span className="text-subText text-xl text-center">
          {descriptionAll}
        </span>
      </div>
      <div className="h-[2px] w-full bg-commonBorder" content=""></div>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-row-4 xl:gap-x-16 gap-y-8">
        <div className="flex flex-col">
          <label htmlFor="id" className="w-full font-medium text-lg">
            ID
          </label>
          <input
            name="id"
            placeholder="Preencha o ID aqui"
            className="w-full border border-commonBorder p-4 rounded-md  focus:outline-none focus:border-brandMain"
            autoComplete="off"
          />
        </div>
        <button className="flex flex-row grow gap-8 items-center justify-center w-[40vw] min-w-[600px] py-4 px-16 border border-commonBorder rounded-md text-xl tracking-wide hover:bg-brandHover hover:text-brandText hover:border-brandHover text-center">
          <PlusIcon className="w-10 h-auto inline-block" />
          <span className="inline-block">Selecionar ID</span>
        </button>
        <div className="col-start-2 row-start-1 row-end-4 flex flex-col gap-4">
          <div className="font-medium text-lg">IDs selecionados</div>
          <table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <button className="flex flex-row grow gap-8 justify-center items-center w-[40vw] min-w-[600px] py-12 px-16 border border-commonBorder rounded-md text-xl tracking-wide hover:bg-brandHover hover:text-brandText hover:border-brandHover text-center">
          {Icon}
          <span className="inline-block">{content} selecionados</span>
        </button>
      </div>
    </main>
  );
}
