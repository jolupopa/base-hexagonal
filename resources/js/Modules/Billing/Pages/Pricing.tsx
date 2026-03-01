import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
}

interface Props {
    plans: { data: Plan[] };
}

export default function Pricing({ plans }: Props) {
    return (
        <AdminLayout>
            <Head title="Planes y Precios" />

            <div className="mx-auto max-w-5xl py-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Escala tu Inmobiliaria</h1>
                    <p className="mt-4 text-lg text-slate-500">Planes diseñados para agentes que buscan el siguiente nivel.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                    {plans.data.map((plan) => (
                        <div key={plan.id} className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:scale-[1.01]">
                            {plan.name.includes('Premium') && (
                                <div className="absolute -top-4 right-8 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                                    RECOMENDADO
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                <span className="text-sm font-bold text-slate-400">/ mes</span>
                            </div>

                            <ul className="mb-10 flex-1 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                        <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full rounded-2xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-[0.98]">
                                Suscribirme Ahora
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
