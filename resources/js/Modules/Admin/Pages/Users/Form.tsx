import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface User {
    id?: string;
    name: string;
    email: string;
}

interface Props {
    user?: User;
}

export default function Form({ user }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            put(`/admin/usuarios/${user.id}`);
        } else {
            post('/admin/usuarios');
        }
    };

    return (
        <AdminLayout>
            <Head title={user ? 'Editar Usuario' : 'Nuevo Usuario'} />

            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        {user ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
                    </h1>
                    <p className="mt-1 text-slate-500">
                        Completa los datos del usuario para {user ? 'actualizar su cuenta' : 'darle acceso al sistema'}.
                    </p>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Ej. Juan Pérez"
                        />
                        {errors.name && <p className="text-xs font-bold text-rose-500">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="juan@ejemplo.com"
                        />
                        {errors.email && <p className="text-xs font-bold text-rose-500">{errors.email}</p>}
                    </div>

                    {!user && (
                        <>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Contraseña</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                {errors.password && <p className="text-xs font-bold text-rose-500">{errors.password}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                    className="rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </>
                    )}

                    <div className="mt-4 flex items-center justify-end gap-4">
                        <Link href="/admin/usuarios" className="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">
                            Cancelar
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-2xl bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 disabled:opacity-50"
                        >
                            {user ? 'Guardar Cambios' : 'Crear Usuario'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
