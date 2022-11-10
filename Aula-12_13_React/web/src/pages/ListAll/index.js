import { FaAlignLeft } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListAll() {

    const [users, setUsers] = useState([
    ]);

    async function ListAll(e) {
        e.preventDefault();

        const response = await ClientUsers.listAll();

        if (response.status === 200) {
            setUsers(response.data)
            toast.success('Usuários resgatados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar todos usuários">
                    <FaAlignLeft size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={ListAll}>

                        <div class="table-wrapper">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.email} </td>
                                            <td>{user.nome} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <button type="submit">Buscar Todos</button>

                    </form>
                </div>

            </div>
        </div>
    )
}