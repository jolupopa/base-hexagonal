import React from 'react';
import { useForm } from '@inertiajs/react';
import propertyRoutes from '@/routes/properties';

interface Props {
    filters: any;
    categories: any[];
    amenities: any[];
}

export default function SearchSidebar({ filters, categories, amenities }: Props) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        type: filters.type || '',
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
        get(propertyRoutes.index.url(), {
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
        <form onSubmit={handleSearch} className="w-80 flex-shrink-0 space-y-6 rounded-2xl border border-[#333333] bg-[#1a1a1a] p-6">
            <h2 className="text-lg font-bold text-white">Advanced Search</h2>

            <div className="space-y-4">
                {/* Text Search */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0]">Search</label>
                    <input
                        type="text"
                        value={data.search}
                        onChange={e => setData('search', e.target.value)}
                        placeholder="Title, address..."
                        className="mt-2 w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15] focus:ring-[#FACC15]"
                    />
                </div>

                {/* Operation & Type */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0]">Operation</label>
                        <select
                            value={data.operation}
                            onChange={e => setData('operation', e.target.value)}
                            className="mt-2 w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                        >
                            <option value="">All</option>
                            <option value="sale">Venta</option>
                            <option value="rent">Alquiler</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0]">Category</label>
                        <select
                            value={data.category_id}
                            onChange={e => setData('category_id', e.target.value)}
                            className="mt-2 w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                        >
                            <option value="">All</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0]">Price Range</label>
                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="number"
                            value={data.min_price}
                            onChange={e => setData('min_price', e.target.value)}
                            placeholder="Min"
                            className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                        />
                        <span className="text-[#333333]">-</span>
                        <input
                            type="number"
                            value={data.max_price}
                            onChange={e => setData('max_price', e.target.value)}
                            placeholder="Max"
                            className="w-full rounded-xl border-[#333333] bg-[#242424] text-sm text-white focus:border-[#FACC15]"
                        />
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0]">Amenities</label>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                        {amenities.slice(0, 6).map(amenity => (
                            <label key={amenity.id} className="flex cursor-pointer items-center gap-3 group">
                                <input
                                    type="checkbox"
                                    checked={data.amenities.includes(amenity.id)}
                                    onChange={() => toggleAmenity(amenity.id)}
                                    className="h-4 w-4 rounded border-[#333333] bg-[#242424] text-[#FACC15] focus:ring-[#FACC15]"
                                />
                                <span className="text-sm text-[#A0A0A0] transition-colors group-hover:text-white">{amenity.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-6 w-full rounded-xl bg-[#FACC15] py-3 text-sm font-bold text-[#121212] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                >
                    {processing ? 'Searching...' : 'Search Properties'}
                </button>
            </div>
        </form>
    );
}
