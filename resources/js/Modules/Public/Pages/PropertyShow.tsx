import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import publicProperties from '@/routes/public/properties';
import { home } from '@/routes';

interface Image {
    id: string;
    url: string;
    thumb: string;
}

interface Property {
    id: string;
    title: string;
    description: string;
    type: string;
    operation: string;
    price_formatted: string;
    price: number;
    currency: string;
    area_total: number;
    bedrooms: number;
    bathrooms: number;
    address: string;
    main_image: string;
    images: Image[];
    amenities: string[];
    category: { id: string; name: string };
    agent: { name: string; email: string };
    ubigeo?: { district: string; province: string };
    created_at_human: string;
}

interface Props {
    property: { data: Property };
    related: { data: Property[] };
}

export default function PropertyShow({ property: { data: property }, related: { data: related } }: Props) {
    const [activeImage, setActiveImage] = useState(property.main_image);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const allImages = [property.main_image, ...(property.images?.map(i => i.url) || [])];

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
            left: width * index,
            behavior: 'smooth'
        });
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const next = (currentIndex + 1) % allImages.length;
        scrollToIndex(next);
    };

    const prevSlide = () => {
        const prev = (currentIndex - 1 + allImages.length) % allImages.length;
        scrollToIndex(prev);
    };

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: `I am interested in "${property.title}" and would like to schedule a visit.`,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your request has been sent to the agent.');
        reset();
    };

    return (
        <FrontLayout>
            <Head>
                <title>{`${property.title} | CrmSaas Luxury`}</title>
                <meta name="description" content={property.description?.substring(0, 160)} />
            </Head>

            <div className="bg-[#121212] min-h-screen">
                {/* ── Breadcrumbs & Actions ── */}
                <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555555]">
                            <Link href={home.url()} className="hover:text-[#FACC15] transition-colors">Home</Link>
                            <span>/</span>
                            <Link href={publicProperties.index.url()} className="hover:text-[#FACC15] transition-colors">Properties</Link>
                            <span>/</span>
                            <span className="text-[#A0A0A0]">{property.category?.name}</span>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#333333] text-[#A0A0A0] hover:text-[#FACC15] hover:border-[#FACC15] transition-all">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#333333] text-[#A0A0A0] hover:text-[#FACC15] hover:border-[#FACC15] transition-all">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Visual Showcase ── */}
                <div className="mx-auto max-w-7xl px-0 sm:px-6">
                    {/* Desktop View (Grid) */}
                    <div className="hidden lg:grid grid-cols-4 gap-4 h-[600px]">
                        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden group cursor-zoom-in">
                            <img
                                src={activeImage}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt={property.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-8 left-8">
                                <div className="flex items-center gap-3">
                                    <span className="px-4 py-1.5 rounded-full bg-[#FACC15] text-[#121212] text-[10px] font-black uppercase tracking-widest">
                                        Exclusive Listing
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                                        {property.operation === 'sale' ? 'For Sale' : 'For Rent'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                            {(property.images || []).map((img) => (
                                <button
                                    key={img.id}
                                    onClick={() => setActiveImage(img.url)}
                                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] flex-shrink-0 border-2 transition-all ${activeImage === img.url ? 'border-[#FACC15]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img.thumb || img.url} className="h-full w-full object-cover" alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet View (Carousel) */}
                    <div className="lg:hidden relative overflow-hidden group">
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar scroll-smooth"
                        >
                            {allImages.map((url, idx) => (
                                <div key={idx} className="flex-shrink-0 w-full h-[450px] snap-center relative">
                                    <img src={url} className="h-full w-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-[#FACC15] hover:text-[#121212] transition-all duration-300"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-[#FACC15] hover:text-[#121212] transition-all duration-300"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2">
                            {allImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToIndex(idx)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-8 bg-[#FACC15]' : 'w-2 bg-white/30'}`}
                                />
                            ))}
                        </div>

                        {/* Mobile Badges */}
                        <div className="absolute top-6 left-6 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-[#FACC15] text-[#121212] text-[9px] font-black uppercase tracking-widest shadow-xl shadow-[#FACC15]/20">
                                Exclusive
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest border border-white/20">
                                {property.operation === 'sale' ? 'Sale' : 'Rent'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Main Content & Sidebar ── */}
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="border-b border-[#333333] pb-10">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div className="space-y-2">
                                        <h1 className="text-4xl font-black text-white leading-tight uppercase tracking-tight">
                                            {property.title}
                                        </h1>
                                        <div className="flex items-center gap-2 text-[#A0A0A0]">
                                            <svg className="h-5 w-5 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span className="text-sm font-medium">{property.address}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-[#555555] uppercase tracking-widest mb-1">Elite Price</p>
                                        <p className="text-4xl font-black text-[#FACC15]">{property.price_formatted}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                    {[
                                        { label: 'Bedrooms', value: property.bedrooms, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 011 1v5m-4 0h4' },
                                        { label: 'Bathrooms', value: property.bathrooms, icon: 'M8 12V7a2 2 0 012-2h4a2 2 0 012 2v5' },
                                        { label: 'Area Total', value: `${property.area_total} m²`, icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
                                        { label: 'Type', value: property.type, icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
                                    ].map((stat) => (
                                        <div key={stat.label} className="bg-[#1a1a1a] p-4 rounded-2xl border border-[#333333]">
                                            <div className="flex items-center gap-3 mb-2">
                                                <svg className="h-4 w-4 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} /></svg>
                                                <span className="text-[10px] font-black text-[#555555] uppercase tracking-widest">{stat.label}</span>
                                            </div>
                                            <p className="text-lg font-black text-white">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-black text-white uppercase tracking-wider">The Concept</h3>
                                <p className="text-[#A0A0A0] text-lg leading-relaxed whitespace-pre-line">
                                    {property.description || 'Exclusive property description.'}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white uppercase tracking-wider">Premium Features</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {(property.amenities || []).map((amenity) => (
                                        <div key={amenity} className="flex items-center gap-3 text-[#D1D1D1]">
                                            <div className="h-6 w-6 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                                                <svg className="h-3 w-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="font-bold">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white uppercase tracking-wider">Prime Location</h3>
                                <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-[#333333] bg-[#1a1a1a] flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="h-16 w-16 mx-auto rounded-full bg-[#FACC15]/10 flex items-center justify-center border border-[#FACC15]/20 animate-pulse">
                                            <svg className="h-8 w-8 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                        </div>
                                        <p className="text-[#A0A0A0] font-bold uppercase tracking-widest text-xs">
                                            {property.ubigeo?.district}, {property.ubigeo?.province}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FACC15 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="sticky top-24 bg-[#1a1a1a] rounded-3xl border border-[#333333] p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15]/5 rounded-bl-full pointer-events-none" />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-14 w-14 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 flex items-center justify-center text-xl font-black text-[#FACC15]">
                                        {property.agent?.name?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[#555555] uppercase tracking-widest">Listing Curator</p>
                                        <p className="text-lg font-black text-white">{property.agent?.name}</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-[#555555] uppercase tracking-widest pl-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full bg-[#121212] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-0 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-[#555555] uppercase tracking-widest pl-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full bg-[#121212] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-0 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-[#555555] uppercase tracking-widest pl-1">Inquiry</label>
                                        <textarea
                                            rows={4}
                                            required
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            className="w-full bg-[#121212] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:border-[#FACC15] focus:ring-0 transition-all resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-[#FACC15] text-[#121212] font-black py-4 rounded-full shadow-lg shadow-[#FACC15]/20 hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest text-xs"
                                    >
                                        Request Private Tour
                                    </button>
                                </form>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white tracking-tight uppercase">Similar Assets</h3>
                                <div className="space-y-6">
                                    {(related || []).map((item) => (
                                        <Link
                                            key={item.id}
                                            href={publicProperties.show.url(item.id)}
                                            className="group flex gap-4 p-4 rounded-2xl bg-[#1a1a1a]/50 border border-transparent hover:border-[#FACC15]/30 transition-all"
                                        >
                                            <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                                                <img src={item.main_image} className="h-full w-full object-cover" alt="" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className="text-xs font-black text-white group-hover:text-[#FACC15] transition-colors line-clamp-1">{item.title}</p>
                                                <p className="text-sm font-black text-[#FACC15] mt-1">{item.price_formatted}</p>
                                                <p className="text-[10px] text-[#555555] mt-1">{item.address}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
