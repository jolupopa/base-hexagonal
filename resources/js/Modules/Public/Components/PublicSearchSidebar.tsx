import React from 'react';
import { useForm } from '@inertiajs/react';
import publicProperties from '@/routes/public/properties';


interface Props {
    filters: any;
    categories: any[];
    amenities: any[];
}

export default function PublicSearchSidebar({ filters, categories, amenities }: Props) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        operation: filters.operation || '',
        min_price: filters.min_price || '',
        max_price: filters.max_price || '',
        bedrooms: filters.bedrooms || '',
        bathrooms: filters.bathrooms || '',
        category_id: filters.category_id || '',
        amenities: filters.amenities || [],
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        get(publicProperties.index.url({ query: data }), {
            preserveState: true,
            replace: true,
        });
    };

    const toggleAmenity = (id: string) => {
        const newAmenities = data.amenities.includes(id)
            ? data.amenities.filter((a: string) => a !== id)
            : [...data.amenities, id];
        setData('amenities', newAmenities);
    };

    return (
        <form onSubmit={handleSearch} className="w-full lg:w-80 flex-shrink-0 space-y-8 bg-[#1a1a1a] p-8 rounded-3xl border border-[#333333] sticky top-24">
            <div>
                <h2 className="text-xl font-black text-white mb-2 tracking-tight">Advanced Filters</h2>
                <div className="h-1 w-10 bg-[#FACC15] rounded-full" />
            </div>

            <div className="space-y-6">
                {/* Price Range Slider Mock/Input */}
                <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555]">Price Range (USD)</label>
                    <div className="mt-4 space-y-4">
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-2.5 text-[10px] text-[#444444] font-bold">$</span>
                                <input
                                    type="number"
                                    value={data.min_price}
                                    onChange={e => setData('min_price', e.target.value)}
                                    placeholder="Min"
                                    className="w-full pl-6 pr-4 py-2 bg-[#242424] border-none rounded-xl text-xs text-white focus:ring-1 focus:ring-[#FACC15]"
                                />
                            </div>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-2.5 text-[10px] text-[#444444] font-bold">$</span>
                                <input
                                    type="number"
                                    value={data.max_price}
                                    onChange={e => setData('max_price', e.target.value)}
                                    placeholder="Max"
                                    className="w-full pl-6 pr-4 py-2 bg-[#242424] border-none rounded-xl text-xs text-white focus:ring-1 focus:ring-[#FACC15]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Type */}
                <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555] mb-4 block">Property Type</label>
                    <div className="space-y-3 mt-4">
                        {categories.map(cat => (
                            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={data.category_id === cat.id}
                                        onChange={() => setData('category_id', data.category_id === cat.id ? '' : cat.id)}
                                        className="h-5 w-5 rounded border-[#333333] bg-[#242424] text-[#FACC15] focus:ring-offset-0 focus:ring-0 cursor-pointer"
                                    />
                                </div>
                                <span className={`text-sm tracking-tight transition-colors ${data.category_id === cat.id ? 'text-[#FACC15] font-bold' : 'text-[#A0A0A0] group-hover:text-white'}`}>{cat.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Bedrooms */}
                <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555] mb-4 block">Bedrooms</label>
                    <div className="flex bg-[#242424] rounded-xl p-1">
                        {['', '1', '2', '3', '4', '5'].map((num) => (
                            <button
                                key={num}
                                type="button"
                                onClick={() => setData('bedrooms', num)}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${data.bedrooms === num ? 'bg-[#FACC15] text-[#121212]' : 'text-[#A0A0A0] hover:text-white'}`}
                            >
                                {num === '' ? 'Any' : num + '+'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555] mb-4 block">Amenities</label>
                    <div className="grid grid-cols-1 gap-3 mt-4">
                        {amenities.map(amenity => (
                            <label key={amenity.id} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={data.amenities.includes(amenity.id)}
                                    onChange={() => toggleAmenity(amenity.id)}
                                    className="h-5 w-5 rounded border-[#333333] bg-[#242424] text-[#FACC15] focus:ring-offset-0 focus:ring-0 cursor-pointer"
                                />
                                <span className={`text-sm tracking-tight transition-colors ${data.amenities.includes(amenity.id) ? 'text-white font-bold' : 'text-[#A0A0A0] group-hover:text-white'}`}>{amenity.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="pt-4 space-y-3">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-[#FACC15] hover:brightness-110 active:scale-95 text-[#121212] font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-[#FACC15]/10 disabled:opacity-50"
                    >
                        {processing ? 'Applying Filters...' : 'Apply Filters'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setData({
                            search: '', operation: '', min_price: '', max_price: '', bedrooms: '', bathrooms: '', category_id: '', amenities: []
                        })}
                        className="w-full text-[10px] font-black uppercase tracking-[0.2em] text-[#555555] hover:text-[#FACC15] transition-colors py-2"
                    >
                        Reset All Filters
                    </button>
                </div>
            </div>
        </form>
    );
}
