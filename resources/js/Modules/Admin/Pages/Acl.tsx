import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Permission {
    id: string;
    name: string;
    slug: string;
}

interface Role {
    id: string;
    name: string;
    slug: string;
    description: string;
    permissions: Permission[];
}

interface Props {
    roles: Role[];
    permissions: Permission[];
}

export default function Index({ roles, permissions }: Props) {
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
            <Head title="Seguridad y ACL" />

            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Configuración ACL</h1>
                    <p className="mt-1 text-[#A0A0A0]">Visualiza la jerarquía de roles y los permisos asignados en el sistema.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Roles Card */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold text-[#FACC15] uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Roles del Sistema
                        </h2>
                        <div className="space-y-4">
                            {roles.map((role) => (
                                <div key={role.id} className="rounded-2xl border border-[#333333] bg-[#1a1a1a] p-6 transition-all hover:border-[#333333]/80">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{role.name}</h3>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getRoleBadgeColor(role.slug)}`}>
                                            {role.slug}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#A0A0A0] mb-4">{role.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {role.permissions.map(p => (
                                            <span key={p.id} className="px-2 py-0.5 rounded-md bg-[#242424] text-[#A0A0A0] text-[9px] border border-[#333333]">
                                                {p.slug}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Permissions Card */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold text-[#FACC15] uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            Permisos Disponibles
                        </h2>
                        <div className="rounded-2xl border border-[#333333] bg-[#1a1a1a] overflow-hidden">
                            <table className="min-w-full divide-y divide-[#333333]">
                                <thead className="bg-[#242424]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Nombre</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Slug (Constante)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#333333]">
                                    {permissions.map((p) => (
                                        <tr key={p.id} className="hover:bg-white/[0.02]">
                                            <td className="px-6 py-3 text-sm text-white font-medium">{p.name}</td>
                                            <td className="px-6 py-3 text-sm font-mono text-[#FACC15]/80 text-xs">{p.slug}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
