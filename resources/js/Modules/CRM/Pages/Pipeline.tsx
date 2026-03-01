import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Stage {
    id: string;
    name: string;
    order: number;
}

interface Lead {
    id: string;
    client_name: string;
    score: number;
    stage_id: string;
}

interface Props {
    stages: Stage[];
    leads: { data: Lead[] };
}

export default function Pipeline({ stages, leads }: Props) {
    return (
        <AdminLayout>
            <Head title="Pipeline de Ventas" />

            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Pipeline de Ventas</h1>
                        <p className="mt-1 text-slate-500">Gestiona tus prospectos y califícalos con IA.</p>
                    </div>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-6">
                    {stages.map((stage) => (
                        <div key={stage.id} className="w-80 flex-shrink-0">
                            <div className="mb-4 flex items-center justify-between px-2">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">{stage.name}</h3>
                                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                                    {leads.data.filter(l => l.stage_id === stage.id).length}
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 rounded-3xl bg-slate-100/50 p-4 min-h-[500px]">
                                {leads.data.filter(l => l.stage_id === stage.id).map(lead => (
                                    <div key={lead.id} className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
                                        <div className="flex items-start justify-between gap-2">
                                            <h4 className="text-sm font-bold text-slate-900">{lead.client_name}</h4>
                                            {lead.score > 70 && (
                                                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-600">
                                                    <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    HOT
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <div className="h-1.5 w-16 rounded-full bg-slate-100">
                                                    <div className={`h-1.5 rounded-full ${lead.score > 50 ? 'bg-indigo-500' : 'bg-amber-500'}`} style={{ width: `${lead.score}%` }}></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400">{lead.score}</span>
                                            </div>
                                            <div className="h-6 w-6 rounded-full bg-slate-100 border-2 border-white shadow-sm"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
