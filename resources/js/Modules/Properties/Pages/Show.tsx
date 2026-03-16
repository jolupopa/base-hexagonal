import React from 'react';
import { Head } from '@inertiajs/react';
import ClientLayout from '@/Layouts/ClientLayout';
import { Property } from '../Types';
import PriceHistoryChart from '../Components/PriceHistoryChart';
import { 
    BedDouble, 
    Bath, 
    Square, 
    Car, 
    MapPin, 
    Calendar,
    Tag,
    User,
    CheckCircle2
} from 'lucide-react';

interface Props {
    property: {
        data: Property;
    };
}

const Show: React.FC<Props> = ({ property }) => {
    const data = property.data;

    return (
        <ClientLayout>
            <Head title={`${data.title} - CrmSaas`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-500">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#242424] p-6 rounded-2xl border border-white/5 shadow-xl">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                data.status === 'published' ? 'bg-green-500/10 text-green-500' : 'bg-[#FACC15]/10 text-[#FACC15]'
                            }`}>
                                {data.status}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-bold uppercase tracking-wider">
                                {data.operation}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">{data.title}</h1>
                        <div className="flex items-center text-white/50 text-sm gap-2">
                            <MapPin className="w-4 h-4" />
                            {data.address?.address}, {data.address?.ubigeo_id}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-white/50 mb-1 font-medium">Precio Actual</div>
                        <div className="text-4xl font-black text-[#FACC15]">
                            {data.currency} {data.price.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: BedDouble, label: 'Dormitorios', value: data.bedrooms },
                                { icon: Bath, label: 'Baños', value: data.bathrooms },
                                { icon: Car, label: 'Cocheras', value: data.parking_spots },
                                { icon: Square, label: 'Area Total', value: `${data.area_total} m²` },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                                    <item.icon className="w-6 h-6 text-[#FACC15] mb-2" />
                                    <span className="text-white font-bold">{item.value}</span>
                                    <span className="text-white/40 text-xs">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="bg-[#242424] p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Tag className="w-5 h-5 text-[#FACC15]" />
                                Descripción de la Propiedad
                            </h2>
                            <p className="text-white/70 leading-relaxed whitespace-pre-line">
                                {data.description || 'Sin descripción disponible.'}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="bg-[#242424] p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#FACC15]" />
                                Comodidades y Servicios
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {data.amenities?.map((amenity) => (
                                    <div key={amenity.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-[#FACC15]/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
                                        </div>
                                        <span className="text-white/80 text-sm font-medium">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* History Chart */}
                        <PriceHistoryChart listings={data.listings || []} />
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">
                        {/* Agent Card */}
                        <div className="bg-[#242424] p-6 rounded-2xl border border-white/5 shadow-xl">
                            <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Agente Responsable</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#FACC15]/20 flex items-center justify-center">
                                    <User className="w-6 h-6 text-[#FACC15]" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{data.user.name}</div>
                                    <div className="text-white/40 text-xs">Consultor Inmobiliario</div>
                                </div>
                            </div>
                        </div>

                        {/* Property Specs */}
                        <div className="bg-[#242424] p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
                            <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Detalles Técnicos</h3>
                            <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                <span className="text-white/40">ID Propiedad</span>
                                <span className="text-white font-mono text-xs">{data.id.split('-')[0]}</span>
                            </div>
                            <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                <span className="text-white/40">Tipo</span>
                                <span className="text-white">{data.type}</span>
                            </div>
                            <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                <span className="text-white/40">Área Techada</span>
                                <span className="text-white">{data.area_built || 0} m²</span>
                            </div>
                            <div className="flex justify-between text-sm py-2">
                                <span className="text-white/40">Publicado</span>
                                <span className="text-white">{data.created_at.human}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Show;
