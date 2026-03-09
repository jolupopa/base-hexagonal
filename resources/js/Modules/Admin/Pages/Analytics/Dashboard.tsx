import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    Users,
    Building2,
    CreditCard,
    Activity,
    ArrowUpRight,
    TrendingUp
} from 'lucide-react';

interface Stats {
    total_companies: number;
    total_users: number;
    active_subscriptions: number;
    total_properties: number;
    system_health: string;
    last_sync: string;
}

interface Props {
    stats: Stats;
}

export default function Dashboard({ stats }: Props) {
    const cards = [
        {
            name: 'Empresas',
            value: stats.total_companies,
            icon: <Building2 className="h-6 w-6" />,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            name: 'Usuarios Totales',
            value: stats.total_users,
            icon: <Users className="h-6 w-6" />,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            name: 'Suscripciones Activas',
            value: stats.active_subscriptions,
            icon: <CreditCard className="h-6 w-6" />,
            color: 'text-[#FACC15]',
            bg: 'bg-[#FACC15]/10'
        },
        {
            name: 'Propiedades del Sistema',
            value: stats.total_properties,
            icon: <Activity className="h-6 w-6" />,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10'
        },
    ];

    return (
        <AdminLayout>
            <Head title="Admin Dashboard | EstateManager" />

            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">Dashboard Global</h1>
                    <p className="mt-1 text-[#A0A0A0]">Visión general del estado del sistema y métricas clave.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.name} className="group overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] p-6 transition-all hover:border-[#FACC15]/30">
                            <div className="flex items-center justify-between">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.color}`}>
                                    {card.icon}
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#242424] opacity-0 transition-opacity group-hover:opacity-100">
                                    <ArrowUpRight className="h-4 w-4 text-[#A0A0A0]" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-[#A0A0A0]">{card.name}</p>
                                <h3 className="mt-1 text-3xl font-bold text-white tracking-tight">
                                    {card.value.toLocaleString()}
                                </h3>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                                    <TrendingUp className="h-3 w-3" />
                                    +5.2%
                                </span>
                                <span className="text-xs text-[#666666]">vs mes pasado</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 rounded-2xl border border-[#333333] bg-[#1a1a1a] p-8">
                        <h3 className="text-lg font-bold text-white mb-6">Estado del Sistema</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-[#242424] border border-[#333333]">
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                    <span className="font-medium">Infraestructura Core</span>
                                </div>
                                <span className="text-xs font-bold text-emerald-500 px-2 py-1 rounded bg-emerald-500/10 uppercase tracking-wider">Operativo</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-[#242424] border border-[#333333]">
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                    <span className="font-medium">API Endpoints</span>
                                </div>
                                <span className="text-xs font-bold text-emerald-500 px-2 py-1 rounded bg-emerald-500/10 uppercase tracking-wider">Operativo</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-[#242424] border border-[#333333]">
                                <div className="flex items-center gap-4">
                                    <div className="h-3 w-3 rounded-full bg-[#FACC15] shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
                                    <span className="font-medium">Procesamiento de Imágenes</span>
                                </div>
                                <span className="text-xs font-bold text-[#FACC15] px-2 py-1 rounded bg-[#FACC15]/10 uppercase tracking-wider">Carga Elevada</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#333333] bg-[#1a1a1a] p-8">
                        <h3 className="text-lg font-bold text-white mb-6">Últimas Sincronizaciones</h3>
                        <div className="space-y-4">
                            <div className="pb-4 border-b border-[#242424]">
                                <p className="text-xs text-[#A0A0A0]">Wayfinder Routes</p>
                                <p className="text-sm font-medium mt-1">Sincronizado correctamente</p>
                                <p className="text-[10px] text-[#666666] mt-1">{stats.last_sync}</p>
                            </div>
                            <div className="pb-4 border-b border-[#242424]">
                                <p className="text-xs text-[#A0A0A0]">Buscador Global</p>
                                <p className="text-sm font-medium mt-1">Indexación completada</p>
                                <p className="text-[10px] text-[#666666] mt-1">Hace 12 minutos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
