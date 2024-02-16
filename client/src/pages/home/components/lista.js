import React from "react";

function ListaMenu({ titulo, data }){
    return (
        <div>
            {data.length > 0 && (
                <>
                    <span className="font-bold text-2xl">{titulo}</span>
                    <ul className='list-none mt-2 border rounded-lg'>
                        {data.map(item => (
                            <li key={item.id} className="border-b px-3 py-2">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-9">
                                        <span className='font-semibold'>{item.titulo}</span> <br />
                                        <span className='font-light'>{item.descricao}</span>
                                    </div>
                                    <div className="text-end items-center grid justify-items-end col-span-3">
                                        <span className="border-b border-red-400">{item.view}</span>
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
