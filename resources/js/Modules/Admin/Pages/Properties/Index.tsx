import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import admin from '@/routes/admin';

interface Property {
    id: string;
    title: string;
    status: string;
    price_formatted: string;
    deleted_at: string | null;
}

interface UserStats {
    total: number;
    published: number;
    trash: number;
}

interface UserPropertyData {
    id: string;
    name: string;
    email: string;
    company_name?: string;
    initials: string;
    avatar_url?: string;
    property_limit: number;
    stats: UserStats;
}

interface Props {
    users: {
        data: UserPropertyData[];
        meta: any;
        links: any;
    };
    filters: {
        search?: string;
    };
}

export default function Index({ users, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [editingQuota, setEditingQuota] = useState<{ id: string, limit: number } | null>(null);
    const [selectedUser, setSelectedUser] = useState<{ id: string, name: string } | null>(null);
    const [userProperties, setUserProperties] = useState<Property[]>([]);
    const [isLoadingProperties, setIsLoadingProperties] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search !== (filters.search || '')) {
                router.get(admin.properties.management.index.url({ query: { search } }), {}, { preserveState: true, replace: true });
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    const handleUpdateQuota = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingQuota) return;

        router.post(admin.users.updateQuota.url(editingQuota.id), {
            property_limit: editingQuota.limit
        }, {
            onSuccess: () => setEditingQuota(null),
        });
    };

    const fetchUserProperties = async (userId: string, userName: string) => {
        setIsLoadingProperties(true);
        setSelectedUser({ id: userId, name: userName });
        try {
            const response = await fetch(admin.properties.management.userProperties.url(userId));
            const data = await response.json();
            setUserProperties(data.properties.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        } finally {
            setIsLoadingProperties(false);
        }
    };

    const handleForceDelete = (propertyId: string) => {
        if (confirm('¿Estás seguro de eliminar permanentemente esta propiedad? Esta acción no se puede deshacer.')) {
            router.delete(admin.properties.management.forceDelete.url(propertyId), {
                onSuccess: () => {
                    setUserProperties(userProperties.filter(p => p.id !== propertyId));
                }
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Gestión de Propiedades" />

            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white uppercase tracking-tighter">Control de Inventario</h1>
                    <p className="mt-1 text-[#A0A0A0]">Gestiona los límites de publicación y el inventario global de propiedades por usuario.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 max-w-lg">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#444444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Buscar por usuario o empresa..."
                            className="w-full rounded-2xl border border-[#333333] bg-[#1a1a1a] pl-12 pr-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-[#FACC15]/20 transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Users Table */}
                <div className="overflow-hidden rounded-3xl border border-[#333333] bg-[#1a1a1a] shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[#333333]">
                            <thead className="bg-[#242424]">
                                <tr>
                                    <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest text-[#555555]">Usuario</th>
                                    <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest text-[#555555]">Publicadas / Total</th>
                                    <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest text-[#555555]">Papelera</th>
                                    <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest text-[#555555]">Límite (Quota)</th>
                                    <th className="px-6 py-5 text-right text-[10px] font-black uppercase tracking-widest text-[#555555]">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#333333]">
                                {users.data.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-xl bg-[#242424] border border-[#333333] flex items-center justify-center overflow-hidden">
                                                    {user.avatar_url ? (
                                                        <img src={user.avatar_url} className="h-full w-full object-cover" alt="" />
                                                    ) : (
                                                        <span className="text-xs font-bold text-[#FACC15]">{user.initials}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-white leading-none">{user.name}</p>
                                                    <p className="text-[10px] text-[#555555] mt-1 font-bold">
                                                        {user.company_name || user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-end gap-1.5">
                                                <span className="text-lg font-black text-white">{user.stats.published}</span>
                                                <span className="text-xs text-[#555555] mb-1 font-bold">/ {user.stats.total}</span>
                                            </div>
                                            <div className="w-24 h-1 bg-[#242424] rounded-full mt-2 overflow-hidden">
                                                <div
                                                    className="h-full bg-[#FACC15] rounded-full"
                                                    style={{ width: `${Math.min((user.stats.published / (user.property_limit || 1)) * 100, 100)}%` }}
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`text-sm font-black ${user.stats.trash > 0 ? 'text-red-400' : 'text-[#333333]'}`}>
                                                {user.stats.trash} items
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            {editingQuota?.id === user.id ? (
                                                <form onSubmit={handleUpdateQuota} className="flex items-center gap-2">
                                                    <input
                                                        type="number"
                                                        className="w-20 rounded-lg bg-[#242424] border border-[#FACC15] text-white text-xs px-2 py-1"
                                                        value={editingQuota.limit}
                                                        onChange={(e) => setEditingQuota({ ...editingQuota, limit: parseInt(e.target.value) })}
                                                        autoFocus
                                                    />
                                                    <button type="submit" className="text-[#FACC15] hover:brightness-110">
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    </button>
                                                    <button type="button" onClick={() => setEditingQuota(null)} className="text-red-400">
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </button>
                                                </form>
                                            ) : (
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-black text-[#A0A0A0]">{user.property_limit}</span>
                                                    <button
                                                        onClick={() => setEditingQuota({ id: user.id, limit: user.property_limit })}
                                                        className="opacity-0 group-hover:opacity-100 p-1 text-[#555555] hover:text-[#FACC15] transition-all"
                                                    >
                                                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button
                                                onClick={() => fetchUserProperties(user.id, user.name)}
                                                className="px-4 py-2 bg-[#242424] border border-[#333333] text-[10px] font-black text-white rounded-xl hover:border-[#FACC15] transition-all uppercase tracking-widest"
                                            >
                                                Gestionar Inventario
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Properties Modal */}
                {selectedUser && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="w-full max-w-4xl bg-[#1a1a1a] rounded-3xl border border-[#333333] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[80vh]">
                            <div className="px-8 py-6 border-b border-[#333333] flex items-center justify-between bg-[#242424]">
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Inventario de {selectedUser.name}</h3>
                                    <p className="text-xs text-[#555555] font-bold">Administra todas las propiedades, incluyendo eliminadas.</p>
                                </div>
                                <button
                                    onClick={() => setSelectedUser(null)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-all text-[#555555] hover:text-white"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                {isLoadingProperties ? (
                                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                                        <div className="h-10 w-10 border-4 border-[#FACC15]/20 border-t-[#FACC15] rounded-full animate-spin" />
                                        <p className="text-xs font-black text-[#555555] uppercase tracking-widest">Cargando inventario...</p>
                                    </div>
                                ) : userProperties.length === 0 ? (
                                    <div className="text-center py-20">
                                        <p className="text-[#555555] font-bold">Este usuario no tiene propiedades registradas.</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-4">
                                        {userProperties.map((prop) => (
                                            <div key={prop.id} className="flex items-center justify-between bg-[#121212] p-4 rounded-2xl border border-[#333333] hover:border-[#FACC15]/30 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center border ${prop.deleted_at ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            {prop.deleted_at ? (
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            ) : (
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            )}
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-white line-clamp-1">{prop.title}</p>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            <span className="text-[10px] font-black uppercase text-[#FACC15]">{prop.price_formatted}</span>
                                                            <span className={`text-[10px] font-black uppercase ${prop.deleted_at ? 'text-red-400' : 'text-[#555555]'}`}>
                                                                {prop.deleted_at ? 'En Papelera' : prop.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {prop.deleted_at && (
                                                        <button
                                                            onClick={() => handleForceDelete(prop.id)}
                                                            className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white text-[9px] font-black uppercase tracking-widest rounded-xl transition-all"
                                                        >
                                                            Eliminar Permanente
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pagination (Simplified) */}
                <div className="flex justify-between items-center text-[#555555] text-xs font-bold uppercase tracking-widest">
                    <span>Mostrando {users.data.length} de {users.meta.total} usuarios</span>
                    <div className="flex gap-2">
                        {users.meta?.links?.map((link: any, idx: number) => (
                            <Link
                                key={idx}
                                href={link.url || '#'}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-4 py-2 rounded-xl border border-[#333333] transition-all ${link.active ? 'bg-[#FACC15] text-[#121212] border-[#FACC15]' : 'hover:border-white/20 hover:text-white'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
