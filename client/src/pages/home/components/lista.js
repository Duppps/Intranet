import React from "react";

function ListaMenu({ titulo, data }) {
    return (
        <div>
            {data.length > 0 && (
                <>
                    <span className="font-bold text-2xl">{titulo}</span>
                    <ul className='list-none mt-2 border rounded-lg'>
                        {data.map(item => (
                            <li key={item.id} className="border-b px-2 py-1">
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2">
                                        <span className='font-semibold'>{item.nome}</span> <br />
                                        <span className='font-light'>{item.funcao}</span>
                                    </div>
                                    <div className="text-end items-center grid justify-items-end">
                                        <span className="border-b border-red-400">{item.dataView}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default ListaMenu;
