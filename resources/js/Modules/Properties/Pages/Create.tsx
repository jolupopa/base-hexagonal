import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import ClientLayout from '@/Layouts/ClientLayout';
import propertyRoutes from '@/routes/properties';
import { Property } from '../Types';
import { 
    Save, 
    X, 
    Home, 
    MapPin, 
    List, 
    DollarSign, 
    Maximize,
    Info
} from 'lucide-react';

interface Props {
    categories: any[];
    projects: any[];
    amenities: any[];
    users: any[];
}

const Create: React.FC<Props> = ({ categories, projects, amenities, users }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        type: 'house',
        operation: 'sale',
        price: '',
        currency: 'USD',
        area_total: '',
        area_built: '',
        bedrooms: 0,
        bathrooms: 0,
        parking_spots: 0,
        status: 'draft',
        category_id: '',
        project_id: '',
        user_id: '',
        amenities: [] as string[],
        address: {
            address: '',
            ubigeo_id: '',
            reference: '',
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(propertyRoutes.store.url());
    };

    return (
        <ClientLayout>
            <Head title="Nueva Propiedad - CrmSaas" />

            <div className="max-w-5xl mx-auto px-4 py-8">
                <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom duration-500">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-black text-white flex items-center gap-3">
                            <Home className="w-8 h-8 text-[#FACC15]" />
                            Publicar Propiedad
                        </h1>
                        <div className="flex gap-3">
                            <button 
                                type="button"
                                className="px-6 py-2 rounded-xl bg-white/5 text-white/60 hover:bg-white/10 transition-all font-bold"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit"
                                disabled={processing}
                                className="px-8 py-2 rounded-xl bg-[#FACC15] text-[#121212] hover:bg-[#EAB308] transition-all font-black flex items-center gap-2 shadow-lg shadow-[#FACC15]/20"
                            >
                                <Save className="w-5 h-5" />
                                Guardar Propiedad
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Main Info */}
                        <div className="md:col-span-2 space-y-6">
                            <section className="bg-[#242424] p-8 rounded-2xl border border-white/5 shadow-xl">
                                <h2 className="text-lg font-bold text-[#FACC15] mb-6 flex items-center gap-2">
                                    <Info className="w-5 h-5" />
                                    Información Básica
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Título del Anuncio</label>
                                        <input 
                                            type="text" 
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all outline-none"
                                            placeholder="Ej: Hermoso Penthouse en Miraflores"
                                        />
                                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Descripción Detallada</label>
                                        <textarea 
                                            rows={5}
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all outline-none resize-none"
                                            placeholder="Describe las características principales..."
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="bg-[#242424] p-8 rounded-2xl border border-white/5 shadow-xl">
                                <h2 className="text-lg font-bold text-[#FACC15] mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    Ubicación
                                </h2>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Dirección Completa</label>
                                        <input 
                                            type="text" 
                                            value={data.address.address}
                                            onChange={e => setData('address', { ...data.address, address: e.target.value })}
                                            className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] outline-none"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Form */}
                        <div className="space-y-6">
                            <div className="bg-[#242424] p-6 rounded-2xl border border-white/5 shadow-xl">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-[#FACC15]" />
                                    Precio y Estado
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-2">
                                        <select 
                                            value={data.currency}
                                            onChange={e => setData('currency', e.target.value)}
                                            className="col-span-1 bg-[#1a1a1a] border border-white/5 rounded-xl px-2 py-3 text-white outline-none"
                                        >
                                            <option value="USD">USD</option>
                                            <option value="PEN">PEN</option>
                                        </select>
                                        <input 
                                            type="number" 
                                            value={data.price}
                                            onChange={e => setData('price', e.target.value)}
                                            className="col-span-2 bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white outline-none"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <select 
                                        value={data.operation}
                                        onChange={e => setData('operation', e.target.value as any)}
                                        className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white outline-none"
                                    >
                                        <option value="sale">Venta</option>
                                        <option value="rent">Alquiler</option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-[#242424] p-6 rounded-2xl border border-white/5 shadow-xl">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                    <Maximize className="w-5 h-5 text-[#FACC15]" />
                                    Especificaciones
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/60">Dormitorios</span>
                                        <input 
                                            type="number" 
                                            value={data.bedrooms}
                                            onChange={e => setData('bedrooms', parseInt(e.target.value))}
                                            className="w-16 bg-transparent text-right text-white font-bold outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/60">Baños</span>
                                        <input 
                                            type="number" 
                                            value={data.bathrooms}
                                            onChange={e => setData('bathrooms', parseInt(e.target.value))}
                                            className="w-16 bg-transparent text-right text-white font-bold outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/60">Cocheras</span>
                                        <input 
                                            type="number" 
                                            value={data.parking_spots}
                                            onChange={e => setData('parking_spots', parseInt(e.target.value))}
                                            className="w-16 bg-transparent text-right text-white font-bold outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ClientLayout>
    );
};

export default Create;
