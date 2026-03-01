import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Property {
    id: string;
    title: string;
    price_formatted: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area_total: number;
    status: string;
}

interface Props {
    properties: {
        data: Property[];
        links: any;
    };
}

export default function Index({ properties }: Props) {
    return (
        <AdminLayout>
            <Head title="Propiedades" />

            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Mis Propiedades</h1>
                        <p className="mt-1 text-slate-500">Gestiona y publica el inventario de tu inmobiliaria.</p>
                    </div>
                    <Link
                        href="/propiedades/crear"
                        className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        + Nueva Propiedad
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {properties.data.map((property) => (
                        <div key={property.id} className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:shadow-2xl hover:shadow-slate-200/50">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                                <div className="flex h-full items-center justify-center text-slate-300">
                                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur">
                                        {property.status === 'published' ? 'Publicado' : 'Borrador'}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{property.title}</h3>
                                <p className="mt-1 text-sm text-slate-500 line-clamp-1">{property.address}</p>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-extrabold text-indigo-600">{property.price_formatted}</span>
                                </div>

                                <div className="mt-4 flex gap-4 border-t border-slate-50 pt-4">
                                    <div className="flex items-center gap-1.5 grayscale opacity-60">
                                        <span className="text-xs font-semibold">{property.bedrooms} <span className="font-medium">Hab.</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 grayscale opacity-60">
                                        <span className="text-xs font-semibold">{property.bathrooms} <span className="font-medium">Baños</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 grayscale opacity-60">
                                        <span className="text-xs font-semibold">{property.area_total} <span className="font-medium">m²</span></span>
                                    </div>
                                </div>
                            </div>

                            <Link href={`/propiedades/${property.id}`} className="absolute inset-0 z-10"></Link>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
