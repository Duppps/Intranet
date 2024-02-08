import React from "react";

function ListaMenu({ titulo, data }) {
    return (
        <div>
            {data.length > 0 && (
                <>
                    <span className="font-bold text-2xl">{titulo}</span>
                    <ul className='list-none mt-2 border rounded-lg'>
                        {data.map(user => {
                            const dataNascimento = new Date(user.nascimento);
                            const diaNascimento = String(dataNascimento.getDate()).padStart(2, '0');
                            const mesNascimento = String(dataNascimento.getMonth() + 1).padStart(2, '0');
                            const dataAniversario = `${diaNascimento}/${mesNascimento}`;

                            return (
                                <li key={user.id} className="grid grid-cols-4 border-b px-2 py-1">
                                    <div className='col-span-3'>
                                        <span className="font-medium">{user.nome}</span> <br />
                                        <span className="text-sm">{user.funcao}</span> <br />
                                    </div>
                                    <div className='col-span-1 text-end'>
                                        <span className="text-sm border-b border-red-400">{user.dataVisualizacao}</span> <br />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
}

export default ListaMenu;
