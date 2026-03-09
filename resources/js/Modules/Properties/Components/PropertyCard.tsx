import React from 'react';
import { Link } from '@inertiajs/react';
import propertyRoutes from '@/routes/properties';

interface Property {
    id: string;
    title: string;
    price_formatted: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area_total: number;
    status: string;
    main_image: string;
    category?: { name: string };
    operation: string;
}

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#333333] bg-[#242424] transition-all hover:border-[#FACC15]/30 hover:shadow-2xl hover:shadow-[#FACC15]/5">
            {/* Image Section */}
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#1a1a1a] relative">
                <img
                    src={property.main_image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="rounded-full bg-[#121212]/80 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FACC15] border border-[#FACC15]/20">
                        {property.operation === 'sale' ? 'En Venta' : 'Alquiler'}
                    </span>
                    {property.category && (
                        <span className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                            {property.category.name}
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#FACC15] transition-colors line-clamp-1">{property.title}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {property.address}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-b border-[#333333] pb-6">
                    <span className="text-2xl font-black text-white">{property.price_formatted}</span>
                </div>

                <div className="mt-6 flex items-center gap-6 justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-[#333333] flex items-center justify-center text-[#A0A0A0]">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <span className="text-xs text-white font-bold">{property.bedrooms} <span className="text-[#A0A0A0] font-normal">Beds</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-[#333333] flex items-center justify-center text-[#A0A0A0]">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-4h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <span className="text-xs text-white font-bold">{property.bathrooms} <span className="text-[#A0A0A0] font-normal">Baths</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-[#333333] flex items-center justify-center text-[#A0A0A0]">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </div>
                        <span className="text-xs text-white font-bold">{property.area_total} <span className="text-[#A0A0A0] font-normal">m²</span></span>
                    </div>
                </div>
            </div>

            <Link href={propertyRoutes.show.url(property.id)} className="absolute inset-0 z-10" />
        </div>
    );
}
