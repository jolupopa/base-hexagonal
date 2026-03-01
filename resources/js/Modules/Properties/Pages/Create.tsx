import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

interface Ubigeo {
    id: string;
    district: string;
    province: string;
}

interface Amenity {
    id: string;
    name: string;
}

interface Props {
    ubigeos: Ubigeo[];
    amenities: Amenity[];
}

export default function Create({ ubigeos, amenities }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        type: 'apartment',
        operation: 'sale',
        price: '',
        currency: 'USD',
        area_total: '',
        bedrooms: 0,
        bathrooms: 0,
        parking_spots: 0,
        address: '',
        ubigeo_id: '',
        amenityIds: [] as string[],
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/propiedades');
    };

    const toggleAmenity = (id: string) => {
        const current = [...data.amenityIds];
        const index = current.indexOf(id);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(id);
        }
        setData('amenityIds', current);
    };

    return (
        <AdminLayout>
            <Head title="Publicar Propiedad" />

            <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex items-center gap-4">
                    <Link href="/propiedades" className="rounded-xl bg-white p-2 text-slate-400 shadow-sm transition-colors hover:text-indigo-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Nueva Propiedad</h1>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="mb-2 block text-sm font-bold text-slate-700">Título de la Publicación</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    placeholder="Ej: Penthouse con vista al mar en Miraflores"
                                    required
                                />
                                {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
                            </div>

                            <div className="sm:col-span-2">
                                <label className="mb-2 block text-sm font-bold text-slate-700">Descripción</label>
                                <textarea
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    rows={4}
                                    className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    placeholder="Describe las características principales..."
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-700">Tipo de Propiedad</label>
                                <select
                                    value={data.type}
                                    onChange={e => setData('type', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                >
                                    <option value="apartment">Departamento</option>
                                    <option value="house">Casa</option>
                                    <option value="office">Oficina</option>
                                    <option value="land">Terreno</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-700">Operación</label>
                                <select
                                    value={data.operation}
                                    onChange={e => setData('operation', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                >
                                    <option value="sale">Venta</option>
                                    <option value="rent">Alquiler</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Precio</label>
                                    <input
                                        type="number"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Moneda</label>
                                    <select
                                        value={data.currency}
                                        onChange={e => setData('currency', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    >
                                        <option value="USD">USD</option>
                                        <option value="PEN">PEN</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-700">Área Total (m²)</label>
                                <input
                                    type="number"
                                    value={data.area_total}
                                    onChange={e => setData('area_total', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-8">
                            <h3 className="mb-6 text-lg font-bold text-slate-900">Ubicación</h3>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Dirección Exacta</label>
                                    <input
                                        type="text"
                                        value={data.address}
                                        onChange={e => setData('address', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        placeholder="Calle, Número, Urbanización"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="mb-2 block text-sm font-bold text-slate-700">Distrito / Provincia (Ubigeo Perú)</label>
                                    <select
                                        value={data.ubigeo_id}
                                        onChange={e => setData('ubigeo_id', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        required
                                    >
                                        <option value="">Selecciona una ubicación...</option>
                                        {ubigeos.map(u => (
                                            <option key={u.id} value={u.id}>{u.district} - {u.province}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-8">
                            <h3 className="mb-6 text-lg font-bold text-slate-900">Amenidades</h3>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {amenities.map(amenity => (
                                    <button
                                        key={amenity.id}
                                        type="button"
                                        onClick={() => toggleAmenity(amenity.id)}
                                        className={`flex items-center justify-center rounded-2xl border px-4 py-3 text-xs font-bold transition-all ${data.amenityIds.includes(amenity.id)
                                                ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                                                : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-slate-50'
                                            }`}
                                    >
                                        {amenity.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-3xl bg-slate-900 px-12 py-4 text-sm font-bold text-white shadow-2xl transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                        >
                            {processing ? 'Publicando...' : 'Publicar Propiedad Now'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
