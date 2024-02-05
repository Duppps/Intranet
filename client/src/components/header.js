import React from 'react';
import logo from '../logo.png';
import DropdownContent from './dropdown';

const { DropdownItem, Dropdown } = DropdownContent;


function ItemLista({ text, link }) {
    return (
        <a className="hover:text-red-400" href={link}>{text}</a>
    );
}

function Header() {
    return (
        <div>
            <div className="bg-white p-4">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between">
                        <img src={logo} className='w-24' />
                    </div>
                </div>
            </div>
            <div className='bg-black p-3 text-white'>
                <div className="container bg-black mx-auto max-w-screen-xl">
                    <div className="flex space-x-8">
                        <ItemLista text="Home" link="https://intranet.theotransportes.com" />
                        <ItemLista text="SisOS" link="https://intranet.theotransportes.com/SisOS" />
                        <Dropdown text="Contatos" dividy="true">
                            <div className='py-1'>
                                <DropdownItem text="Administrativo / Operacional" link="#"></DropdownItem>
                                <DropdownItem text="Frota" link="#"></DropdownItem>
                            </div>
                            <DropdownItem text="Ramais Matriz" link="#"></DropdownItem>
                        </Dropdown>
                        <Dropdown text="Recursos Humanos">
                            <DropdownItem text="Código de ética e conduta" link="#"></DropdownItem>
                            <DropdownItem text="Organograma" link="#"></DropdownItem>
                            <DropdownItem text="Treinamentos" link="#"></DropdownItem>
                        </Dropdown>
                        <Dropdown text="Links Externos">
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;