import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import users from '@/routes/admin/users';

interface Role {
    id: string;
    name: string;
    slug: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    company_name?: string | null;
    avatar_url?: string | null;
    initials: string;
    roles: Role[];
    created_at: string;
}

interface Props {
    users: {
        data: User[];
        links: any;
        meta: any;
    };
    filters: {
        search?: string;
        role?: string;
    };
    availableRoles: Role[];
}

export default function Index({ users: usersProp, filters, availableRoles }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [roleFilter, setRoleFilter] = useState(filters.role || '');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search !== (filters.search || '') || roleFilter !== (filters.role || '')) {
                router.get(users.index.url(),
                    { search, role: roleFilter },
                    { preserveState: true, replace: true }
                );
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [search, roleFilter]);

    const getRoleBadgeColor = (slug: string) => {
        switch (slug) {
            case 'admin': return 'bg-red-500/10 text-red-400 border-red-500/20';
            case 'company': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'agent': return 'bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20';
            case 'owner': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    return (
        <AdminLayout>
            <Head title="Equipo" />

            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Mi Equipo</h1>
                        <p className="mt-1 text-[#A0A0A0]">Gestiona los miembros de tu organización y sus niveles de acceso.</p>
                    </div>
                    <Link
                        href={users.create.url()}
                        className="inline-flex items-center justify-center rounded-full bg-[#FACC15] px-6 py-3 text-sm font-bold text-[#121212] shadow-xl shadow-[#FACC15]/10 transition-all hover:brightness-110 active:scale-[0.98] h-fit"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Nuevo Miembro
                    </Link>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#A0A0A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Buscar por nombre o correo..."
                            className="w-full rounded-2xl border border-[#333333] bg-[#1a1a1a] pl-12 pr-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-[#FACC15]/20 transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-64">
                        <select
                            className="w-full rounded-2xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-[#FACC15]/20 transition-all appearance-none cursor-pointer"
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                        >
                            <option value="">Todos los roles</option>
                            {availableRoles.map(role => (
                                <option key={role.id} value={role.slug}>{role.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[#333333]">
                            <thead className="bg-[#242424]">
                                <tr>
                                    <th scope="col" className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Miembro</th>
                                    <th scope="col" className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Rol de Acceso</th>
                                    <th scope="col" className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Empresa</th>
                                    <th scope="col" className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Email</th>
                                    <th scope="col" className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Registro</th>
                                    <th scope="col" className="px-6 py-5 text-right text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#333333]">
                                {usersProp.data.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full overflow-hidden border border-[#333333] bg-[#242424] flex items-center justify-center flex-shrink-0">
                                                    {user.avatar_url ? (
                                                        <img src={user.avatar_url} alt={user.name} className="h-full w-full object-cover" />
                                                    ) : (
                                                        <div
                                                            className="text-xs font-bold w-full h-full flex items-center justify-center"
                                                            style={{
                                                                backgroundColor: ['#FACC15', '#EAB308', '#CA8A04', '#A16207', '#333333', '#242424'][
                                                                    (user.initials?.charCodeAt(0) ?? 0) % 6
                                                                ],
                                                                color: (user.initials?.charCodeAt(0) ?? 0) % 6 < 2 ? '#121212' : '#FFFFFF'
                                                            }}
                                                        >
                                                            {user.initials || 'U'}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors">{user.name}</div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {user.roles.map(role => (
                                                    <span
                                                        key={role.id}
                                                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${getRoleBadgeColor(role.slug)}`}
                                                    >
                                                        {role.name}
                                                    </span>
                                                ))}
                                                {user.roles.length === 0 && (
                                                    <span className="text-[10px] text-[#A0A0A0] italic">Sin Rol</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="text-sm text-[#A0A0A0]">{user.company_name || 'Individual'}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="text-sm text-[#A0A0A0]">{user.email}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-[#A0A0A0]">
                                            {new Date(user.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={users.edit.url({ user: user.id })}
                                                    className="p-1.5 text-[#A0A0A0] hover:text-[#FACC15] transition-colors"
                                                    title="Editar"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        if (confirm('¿Estás seguro de eliminar a este miembro?')) {
                                                            router.delete(users.destroy.url({ user: user.id }));
                                                        }
                                                    }}
                                                    className="p-1.5 text-[#A0A0A0] hover:text-red-400 transition-colors"
                                                    title="Eliminar"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {usersProp.data.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 px-4 rounded-3xl border-2 border-dashed border-[#333333] bg-[#1a1a1a]/50">
                        <div className="h-16 w-16 rounded-full bg-[#242424] flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-[#A0A0A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">No se encontraron miembros</h3>
                        <p className="text-[#A0A0A0] text-center max-w-sm">
                            No hay resultados para los filtros aplicados o aún no has invitado a nadie a tu equipo.
                        </p>
                        {(search || roleFilter) && (
                            <button
                                onClick={() => { setSearch(''); setRoleFilter(''); }}
                                className="mt-4 text-[#FACC15] font-bold text-sm hover:underline"
                            >
                                Limpiar filtros
                            </button>
                        )}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
