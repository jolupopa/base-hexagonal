import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Stats {
    total_properties: number;
    total_leads: number;
    avg_lead_score: number;
    recent_properties: any[];
}

interface Props {
    stats: Stats;
}

export default function Dashboard({ stats }: Props) {
    return (
        <AdminLayout>
            <Head title="Panel de Control" />

            <div className="space-y-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Hola, de nuevo 👋</h1>
                    <p className="text-slate-500">Aquí tienes un resumen de lo que está pasando en tu inmobiliaria.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Propiedades</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">{stats.total_properties}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Leads Activos</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">{stats.total_leads}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-rose-500/5 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition-colors group-hover:bg-rose-600 group-hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Score Promedio</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">{stats.avg_lead_score} <span className="text-sm text-slate-400">/ 100</span></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Propiedades Recientes</h3>
                        <div className="space-y-4">
                            {stats.recent_properties.map(p => (
                                <div key={p.id} className="flex items-center gap-4 rounded-2xl p-2 hover:bg-slate-50 transition-colors">
                                    <div className="h-14 w-20 flex-shrink-0 rounded-xl bg-slate-100"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-slate-900 truncate">{p.title}</p>
                                        <p className="text-xs text-slate-500">{p.address}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-extrabold text-indigo-600">${p.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 text-center">
                        <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Activa el scoring automático</h3>
                        <p className="mt-2 text-sm text-slate-500 max-w-xs mb-8">Usa el poder de Google Gemini para calificar tus leads automáticamente.</p>
                        <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800">
                            Configurar IA
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
