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
                                <DropdownItem text="Administrativo / Operacional" link="contatos/administrativo"></DropdownItem>
                                <DropdownItem text="Frota" link="/contatos/manutencao"></DropdownItem>
                            </div>
                            <DropdownItem text="Ramais Matriz" link="#"></DropdownItem>
                        </Dropdown>
                        <Dropdown text="Recursos Humanos">
                            <DropdownItem text="Código de ética e conduta" link="#"></DropdownItem>
                            <DropdownItem text="Organograma" link="#"></DropdownItem>
                            <DropdownItem text="Treinamentos" link="#"></DropdownItem>
                        </Dropdown>
                        <Dropdown text="Links Externos">
                            <DropdownItem text="Avacorp" link="https://theotransportes.avaconcloud.com" icon="http://localhost:3000/img/icons/logo-avacorp-20x-20.webp" targetBlank></DropdownItem>
                            <DropdownItem text="Avacorp TS" link="https://globuscloud.skyinone.net/" icon="http://localhost:3000/img/icons/1551900354534.jpeg" targetBlank></DropdownItem>
                            <DropdownItem text="QualP" link="https://qualp.com.br" icon="http://localhost:3000/img/icons/logo-qualp-20x20.webp" targetBlank></DropdownItem>
                            <DropdownItem text="Portal do Cliente Praxio" link="https://portaldocliente.praxio.com.br/Ticket" icon="http://localhost:3000/img/icons/logo-pdcp-20x20.webp" targetBlank></DropdownItem>
                            <DropdownItem text="Axyma" link="https://auditor.axyma.com.br" icon="http://localhost:3000/img/icons/Solucoes-que-geram-valor-Axyma-Logo.png" targetBlank></DropdownItem>
                            <DropdownItem text="Pontomais" link="https://app2.pontomais.com.br" icon="http://localhost:3000/img/icons/pontomais.webp" targetBlank></DropdownItem>
                            <DropdownItem text="Cefis" link="https://cefis.com.br/portal/cursos" icon="http://localhost:3000/img/icons/cefis20x20.webp" targetBlank></DropdownItem>
                            <DropdownItem text="Loyal" link="https://theotransportes.loyal-solutions.com/loyal6/login.jsp" icon="http://localhost:3000/img/icons/loyal.png" targetBlank></DropdownItem>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;