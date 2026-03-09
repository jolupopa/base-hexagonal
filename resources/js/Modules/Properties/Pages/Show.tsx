import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import propertyInquiryRoutes from '@/routes/properties/inquiry';

interface Props {
    property: any;
}

export default function Show({ property }: Props) {
    const [activeImage, setActiveImage] = useState(property.main_image);

    const { data, setData, post, processing, reset, errors } = useForm({
        property_id: property.id,
        name: '',
        email: '',
        phone: '',
        message: '',
        visit_date: '',
    });

    const submitInquiry = (e: React.FormEvent) => {
        e.preventDefault();
        post(propertyInquiryRoutes.store.url(), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminLayout>
            <Head title={`${property.title} — EstateManager`} />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Left: Gallery & Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#333333] bg-[#1a1a1a]">
                            <img src={activeImage} className="h-full w-full object-cover" alt={property.title} />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {property.images.map((img: any) => (
                                <button
                                    key={img.id}
                                    onClick={() => setActiveImage(img.url)}
                                    className={`h-24 w-40 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${activeImage === img.url ? 'border-[#FACC15]' : 'border-transparent opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img.thumb} className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Property Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex gap-2">
                                <span className="rounded-full bg-[#FACC15]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FACC15]">
                                    {property.type}
                                </span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                                    {property.category?.name}
                                </span>
                            </div>
                            <h1 className="mt-4 text-4xl font-black text-white">{property.title}</h1>
                            <p className="mt-2 text-[#A0A0A0] flex items-center gap-2">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {property.address}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#A0A0A0]">List Price</p>
                            <p className="mt-1 text-4xl font-black text-[#FACC15]">{property.price_formatted}</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-6 rounded-3xl border border-[#333333] bg-[#1a1a1a] p-8">
                        {[
                            { label: 'Bedrooms', val: property.bedrooms, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                            { label: 'Bathrooms', val: property.bathrooms, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                            { label: 'Total Area', val: `${property.area_total} m²`, icon: 'M4 8V4m0 0h4M4 4l5 5' },
                            { label: 'Built Area', val: `${property.area_built || '—'} m²`, icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#242424] text-[#FACC15]">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                                    </svg>
                                </div>
                                <p className="text-xs font-bold text-white">{s.val}</p>
                                <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white">About this property</h2>
                        <p className="text-[#A0A0A0] leading-relaxed whitespace-pre-line">{property.description}</p>
                    </div>
                </div>

                {/* Right: Sidebar Form */}
                <div className="space-y-8">
                    {/* Inquiry Form */}
                    <div className="sticky top-8 rounded-3xl border border-[#333333] bg-[#1a1a1a] p-8 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">Schedule a Visit</h3>

                        <form onSubmit={submitInquiry} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                                    required
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    value={data.visit_date}
                                    onChange={e => setData('visit_date', e.target.value)}
                                    className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="I'm interested in this property..."
                                    rows={4}
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-xl bg-[#FACC15] py-4 text-sm font-black text-[#121212] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                            >
                                {processing ? 'Sending...' : 'Request Visit Details'}
                            </button>

                            <p className="text-[10px] text-center text-[#A0A0A0] mt-4">
                                By clicking the button you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>

                        {/* Agent Summary */}
                        <div className="mt-8 border-t border-[#333333] pt-8">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-[#333333] flex items-center justify-center text-white font-bold text-lg">
                                    {property.agent?.name?.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{property.agent?.name}</p>
                                    <p className="text-xs text-[#A0A0A0]">Licensed Professional Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
