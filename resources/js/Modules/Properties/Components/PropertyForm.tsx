import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/react';

interface Props {
    property?: any;
    ubigeos: any[];
    amenities: any[];
    categories: any[];
    action: string;
    method?: 'post' | 'put';
}

const inputClass = "w-full rounded-xl border border-[#333333] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-[#555555] transition-all focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20 focus:outline-none";
const labelClass = "block text-xs font-bold uppercase tracking-widest text-[#A0A0A0] mb-2";
const sectionClass = "rounded-2xl border border-[#333333] bg-[#242424] p-7";

export default function PropertyForm({ property, ubigeos, amenities, categories, action, method = 'post' }: Props) {
    const { data, setData, post, put, processing, errors, progress } = useForm({
        _method: method === 'put' ? 'PUT' : 'POST', // For multipart/form-data with PUT
        title: property?.title || '',
        description: property?.description || '',
        type: property?.type || 'apartment',
        operation: property?.operation || 'sale',
        price: property?.price || '',
        currency: property?.currency || 'USD',
        area_total: property?.area_total || '',
        area_built: property?.area_built || '',
        bedrooms: property?.bedrooms || 0,
        bathrooms: property?.bathrooms || 0,
        parking_spots: property?.parking_spots || 0,
        address: property?.address || '',
        ubigeo_id: property?.ubigeo_id || '',
        category_id: property?.category_id || '',
        amenities: property?.amenities?.map((a: any) => a.id) || [],
        images: [] as File[],
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since we are sending files, we must use POST even for updates, 
        // and include _method: 'PUT' if it's an update.
        post(action);
    };

    const toggleAmenity = (id: string) => {
        const current = [...data.amenities];
        const index = current.indexOf(id);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(id);
        }
        setData('amenities', current);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData('images', Array.from(e.target.files));
        }
    };

    return (
        <form onSubmit={submit} className="space-y-8 pb-20">
            {/* Basic Info */}
            <div className={sectionClass}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-6">General Information</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <label className={labelClass}>Title</label>
                        <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className={inputClass} placeholder="Modern Loft in Downtown" required />
                        {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClass}>Description</label>
                        <textarea value={data.description} onChange={e => setData('description', e.target.value)} rows={4} className={inputClass} placeholder="Describe the property details..." />
                    </div>
                    <div>
                        <label className={labelClass}>Property Type</label>
                        <select value={data.type} onChange={e => setData('type', e.target.value)} className={inputClass}>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="office">Office</option>
                            <option value="commercial">Commercial</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div>
                        <label className={labelClass}>Category</label>
                        <select value={data.category_id} onChange={e => setData('category_id', e.target.value)} className={inputClass}>
                            <option value="">Select Category</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Financials & Area */}
            <div className={sectionClass}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-6">Financials & Area</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                        <label className={labelClass}>Operation</label>
                        <select value={data.operation} onChange={e => setData('operation', e.target.value)} className={inputClass}>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 flex gap-4">
                        <div className="flex-1">
                            <label className={labelClass}>Price</label>
                            <input type="number" value={data.price} onChange={e => setData('price', e.target.value)} className={inputClass} required />
                        </div>
                        <div className="w-32">
                            <label className={labelClass}>Currency</label>
                            <select value={data.currency} onChange={e => setData('currency', e.target.value)} className={inputClass}>
                                <option value="USD">USD</option>
                                <option value="PEN">PEN</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className={labelClass}>Total Area (m²)</label>
                        <input type="number" value={data.area_total} onChange={e => setData('area_total', e.target.value)} className={inputClass} required />
                    </div>
                    <div>
                        <label className={labelClass}>Built Area (m²)</label>
                        <input type="number" value={data.area_built} onChange={e => setData('area_built', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Bedrooms</label>
                        <input type="number" value={data.bedrooms} onChange={e => setData('bedrooms', parseInt(e.target.value))} className={inputClass} />
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className={sectionClass}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-6">Location</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <label className={labelClass}>Address</label>
                        <input type="text" value={data.address} onChange={e => setData('address', e.target.value)} className={inputClass} required />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClass}>District / Ubigeo</label>
                        <select value={data.ubigeo_id} onChange={e => setData('ubigeo_id', e.target.value)} className={inputClass} required>
                            <option value="">Search Location...</option>
                            {ubigeos.map(u => <option key={u.id} value={u.id}>{u.district} - {u.province}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Amenities */}
            <div className={sectionClass}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-6">Amenities</h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {amenities.map(a => {
                        const active = data.amenities.includes(a.id);
                        return (
                            <button
                                key={a.id}
                                type="button"
                                onClick={() => toggleAmenity(a.id)}
                                className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${active ? 'border-[#FACC15] bg-[#FACC15]/10 text-[#FACC15]' : 'border-[#333333] bg-[#1a1a1a] text-[#A0A0A0] hover:border-[#FACC15]/20'
                                    }`}
                            >
                                {active && <span>✓</span>}
                                {a.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Media Upload */}
            <div className={sectionClass}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-6">Property Gallery</h2>
                <div className="rounded-2xl border-2 border-dashed border-[#333333] bg-[#1a1a1a] p-10 text-center transition-colors hover:border-[#FACC15]/30">
                    <input type="file" multiple onChange={onFileChange} className="hidden" id="images" accept="image/*" />
                    <label htmlFor="images" className="cursor-pointer group">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#242424] text-[#FACC15] group-hover:scale-110 transition-transform">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="mt-4 text-sm font-bold text-white">Click to upload images</p>
                        <p className="mt-1 text-xs text-[#A0A0A0]">Drag and drop multiple premium photos</p>
                    </label>
                    {data.images.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            {data.images.map((f, i) => (
                                <div key={i} className="rounded-lg bg-[#242424] px-3 py-1 text-[10px] text-white border border-[#333333]">
                                    {f.name}
                                </div>
                            ))}
                        </div>
                    )}
                    {progress && (
                        <div className="mt-6 h-1 w-full rounded-full bg-[#242424]">
                            <div className="h-full rounded-full bg-[#FACC15] transition-all" style={{ width: `${progress.percentage}%` }} />
                        </div>
                    )}
                </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-4">
                <button type="submit" disabled={processing} className="rounded-full bg-[#FACC15] px-16 py-4 text-sm font-black text-[#121212] shadow-2xl shadow-[#FACC15]/20 transition-all hover:brightness-110 active:scale-95 disabled:opacity-50">
                    {processing ? 'Processing...' : method === 'post' ? 'Publish Property' : 'Save Changes'}
                </button>
            </div>
        </form>
    );
}
