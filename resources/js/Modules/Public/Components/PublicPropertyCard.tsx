import React from 'react';
import { Link } from '@inertiajs/react';
import publicProperties from '@/routes/public/properties';


interface Property {
    id: string;
    title: string;
    price_formatted: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area_total: number;
    operation: string;
    main_image: string;
    category?: { name: string };
    is_featured?: boolean;
}

export default function PublicPropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#1a1a1a] transition-all hover:border-[#FACC15]/40 hover:shadow-2xl hover:shadow-[#FACC15]/5">
            {/* Image Section */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#121212] relative">
                <img
                    src={property.main_image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.is_featured && (
                        <span className="rounded-full bg-[#121212]/80 backdrop-blur px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#FACC15] border border-[#FACC15]/30 shadow-lg">
                            Featured
                        </span>
                    )}
                    <span className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                        {property.operation === 'sale' ? 'For Sale' : 'For Rent'}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#FACC15] font-black">{property.category?.name || 'Luxury Estate'}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FACC15] transition-colors line-clamp-1 mt-1">{property.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                        <svg className="h-3.5 w-3.5 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {property.address}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-[#333333] py-4 mb-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] uppercase tracking-widest text-[#555555] font-bold">Beds</span>
                        <span className="text-sm font-bold text-white uppercase">{property.bedrooms}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] uppercase tracking-widest text-[#555555] font-bold">Baths</span>
                        <span className="text-sm font-bold text-white uppercase">{property.bathrooms}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] uppercase tracking-widest text-[#555555] font-bold">Area</span>
                        <span className="text-sm font-bold text-white uppercase">{Math.round(property.area_total)} <span className="text-[10px] text-[#A0A0A0]">m²</span></span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-black text-white tracking-tight">{property.price_formatted}</span>
                    <Link
                        href={publicProperties.show.url(property.id)}

                        className="text-[11px] font-black uppercase tracking-widest text-[#FACC15] hover:text-white transition-colors"
                    >
                        View Details →
                    </Link>
                </div>
            </div>

            <Link href={publicProperties.show.url(property.id)} className="absolute inset-0 z-[1]" />

        </div>
    );
}
