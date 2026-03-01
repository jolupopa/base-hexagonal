import React from 'react';
import { Head, Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';

export default function Welcome() {
    return (
        <FrontLayout>
            <Head title="El CRM Inmobiliario para profesionales" />

            <div className="relative isolate overflow-hidden">
                {/* Hero section */}
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                    Novedad v2.0
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-600 transition-colors hover:text-indigo-600">
                                    <span>Ver nuevas funciones</span>
                                    <svg className="h-5 w-5 text-slate-400 group-hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                            Domina el mercado inmobiliario con <span className="text-indigo-600">Inteligencia Artificial</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            La plataforma definitiva para agentes y agencias que quieren automatizar sus ventas, calificar leads con IA y gestionar propiedades en un solo lugar.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/register"
                                className="rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Empezar ahora
                            </Link>
                            <Link href="/precios" className="text-sm font-bold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
                                Ver planes <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="rounded-3xl bg-slate-100 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-3xl lg:p-4 shadow-2xl overflow-hidden shadow-indigo-200">
                                <div className="h-[400px] w-[600px] bg-white rounded-2xl flex items-center justify-center text-slate-200">
                                    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features area placeholder */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-bold leading-7 text-indigo-600 uppercase tracking-widest">Vende más rápido</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Todo lo que necesitas para tu negocio
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {[
                                { name: 'Multitenancy real', desc: 'Gestiona múltiples agencias o equipos con total aislamiento de datos.' },
                                { name: 'IA Integrada', desc: 'Calificación automática de prospectos usando modelos de lenguaje avanzados.' },
                                { name: 'Gestión de Inventario', desc: 'Control total de propiedades, unidades y estados de venta.' },
                            ].map((feature) => (
                                <div key={feature.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
                                    <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-slate-900">
                                        <div className="h-8 w-8 rounded-lg bg-indigo-600 shadow-lg shadow-indigo-100"></div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                        <p className="flex-auto">{feature.desc}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
