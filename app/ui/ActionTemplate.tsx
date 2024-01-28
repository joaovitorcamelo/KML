'use client';

import {Modal}               from "@/app/ui/Modal";
import {PlusIcon, XMarkIcon} from '@heroicons/react/24/outline';
import clsx                  from 'clsx';
import React, {useState}     from 'react';
import {getPerson}           from '../lib/actions';
import {Person}              from '../lib/definitions';

export default function ActionTemplate(
    {
        content,
        descriptionAll,
        Icon,
    }: {
        content: string;
        descriptionAll: string;
        Icon: React.ReactNode;
    }) {
    const [people, setPeople] = useState<Person[]>([]);
    const [id, setID] = useState('');

    const handleSelect = async () => {
        const situation = people.some((person) => person.id === id);
        if (!situation) {
            await getPerson(id).then((response) => setPeople([...people, response]));
            setID('');
            return;
        }
        throw new Error('ID já foi selecionado');
    };

    const handleRemove = (id: string) => {
        setPeople(people.filter((person) => person.id != id));
    };

    return (
        <main className="flex flex-col items-center gap-16 min-w-400px">
            <div
                className="flex flex-col-reverse xl:grid xl:grid-cols-2 xl:gap-x-16 gap-y-8 items-center justify-center"
            >
                <button
                    className={clsx(
                        'w-[40vw] min-w-[600px] py-12 px-16 text-xl',
                        'button',
                    )}
                >
                    {Icon}
                    <span className="inline-block">{content} todos</span>
                </button>
                <span className="text-subText text-xl text-center">
          {descriptionAll}
        </span>
            </div>

            <div className="h-[1px] w-full bg-commonBorder"
                 content=""
            ></div>

            <Modal>
                <Modal.Header closeButton>
                    sssssss
                </Modal.Header>
            </Modal>

            <div className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-row-4 xl:gap-x-16 gap-y-8">
                <div className="xl:row-start-1 xl:col-start-1 flex flex-col gap-2">
                    <label htmlFor="id"
                           className="w-full font-medium text-lg"
                    >
                        ID
                    </label>
                    <input
                        name="id"
                        placeholder="Preencha o ID aqui"
                        className="w-full border border-commonBorder p-4 rounded-md focus:outline-brandHover focus:border-brandHover"
                        autoComplete="off"
                        onChange={(e) => setID(e.target.value)}
                        value={id}
                    />
                </div>

                <button
                    className={clsx(
                        'xl:row-start-2 xl:col-start-1 xl:row-end-2 w-[40vw] min-w-[600px] py-4 px-16 text-xl',
                        'button',
                    )}
                    onClick={handleSelect}
                >
                    <PlusIcon className="w-10 inline-block"/>
                    <span className="inline-block">Selecionar ID</span>
                </button>

                <div className="row-span-4 col-start-2 relative flex flex-col gap-2 max-h-[45vh]">
                    <div className="font-medium text-lg">IDs selecionados</div>
                    <div className="w-full overflow-y-auto border border-commonBorder rounded-md">
                        <table className="w-full border-collapse">
                            <thead className="bg-commonBorder text-brandText text-lg sticky top-0">
                            <tr>
                                <th className="py-2 w-1/4">ID</th>
                                <th className="py-2 w-2/4">Nome</th>
                                <th className="py-2 w-1/4">Actions</th>
                            </tr>
                            </thead>
                            {people.length > 0 ? (
                                <tbody className="text-center max-h-32 overflow-auto">
                                {people.map(({id, name}, index) => (
                                    <tr key={index}>
                                        <td className="rounded-bl-md py-4">{id}</td>
                                        <td className="rounded-br-md py-4">{name}</td>
                                        <td className="flex flex-row justify-center rounded-br-md py-4">
                                            <button
                                                className="px-2 py-1 border border-commonBorder rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white"
                                                onClick={() => handleRemove(id)}
                                            >
                                                <XMarkIcon className="w-7"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            ) : (
                                 <tbody>
                                 <tr>
                                     <td
                                         className="text-center w-full relative py-12 text-lg"
                                         colSpan={3}
                                     >
                                         Nenhum ID selecionado
                                     </td>
                                 </tr>
                                 </tbody>
                             )}
                        </table>
                    </div>
                </div>

                <button
                    className={clsx(
                        'xl:row-start-4 xl:col-start-1 w-[40vw] min-w-[600px] py-12 px-16 text-xl',
                        'button',
                    )}
                >
                    {Icon}
                    <span className="inline-block">{content} selecionados</span>
                </button>
            </div>
        </main>
    );
}
