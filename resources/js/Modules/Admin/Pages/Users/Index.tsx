import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface User {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

interface Props {
    users: {
        data: User[];
        links: any;
    };
}

export default function Index({ users }: Props) {
    return (
        <AdminLayout>
            <Head title="Usuarios" />

            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Gestión de Usuarios</h1>
                        <p className="mt-1 text-slate-500">Administra los accesos de tu equipo.</p>
                    </div>
                    <Link
                        href="/admin/usuarios/crear"
                        className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        + Nuevo Usuario
                    </Link>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Nombre</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Email</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Fecha Alta</th>
                                <th scope="col" className="relative px-6 py-4">
                                    <span className="sr-only">Acciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                            {users.data.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm font-bold text-slate-900">{user.name}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm text-slate-600">{user.email}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm text-slate-500">{new Date(user.created_at).toLocaleDateString()}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        <Link href={`/admin/usuarios/${user.id}/editar`} className="text-indigo-600 hover:text-indigo-900">Editar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
