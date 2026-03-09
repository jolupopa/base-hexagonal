import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import publicProperties from '@/routes/public/properties';


interface Props {
    categories: any[];
}

export default function LandingSearchForm({ categories }: Props) {
    const [operation, setOperation] = useState<'sale' | 'rent' | 'project'>('sale');
    const [search, setSearch] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(publicProperties.index.url({
            query: {
                search,
                operation: operation === 'project' ? '' : operation,
                category_id: categoryId,
                // Simple price range parsing for the landing page
                ...(priceRange ? { max_price: priceRange } : {}),
            }
        }));


    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-1 mb-0 ml-4">
                {(['sale', 'rent', 'project'] as const).map((op) => (
                    <button
                        key={op}
                        onClick={() => setOperation(op)}
                        className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-t-xl transition-all ${operation === op
                            ? 'bg-[#1a1a1a] text-[#FACC15] border-t border-l border-r border-[#333333]'
                            : 'bg-black/40 text-[#A0A0A0] hover:text-white'
                            }`}
                    >
                        {op === 'sale' ? 'Buy' : op === 'rent' ? 'Rent' : 'New Projects'}
                    </button>
                ))}
            </div>

            {/* Form */}
            <form
                onSubmit={handleSearch}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-[#333333] shadow-2xl backdrop-blur-md"
            >
                <div className="relative">
                    <label className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-widest text-[#555555]">Location</label>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search city, area..."
                        className="w-full pt-7 pb-3 px-4 bg-[#242424] border-none rounded-xl text-sm text-white focus:ring-1 focus:ring-[#FACC15] placeholder-[#444444]"
                    />
                </div>

                <div className="relative">
                    <label className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-widest text-[#555555]">Property Type</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full pt-7 pb-3 px-4 bg-[#242424] border-none rounded-xl text-sm text-white focus:ring-1 focus:ring-[#FACC15] appearance-none"
                    >
                        <option value="">All Types</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <label className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-widest text-[#555555]">Price Range</label>
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full pt-7 pb-3 px-4 bg-[#242424] border-none rounded-xl text-sm text-white focus:ring-1 focus:ring-[#FACC15] appearance-none"
                    >
                        <option value="">Any Price</option>
                        <option value="500000">Up to $500k</option>
                        <option value="1000000">Up to $1M</option>
                        <option value="5000000">Up to $5M</option>
                        <option value="10000000">Up to $10M+</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-[#FACC15] hover:brightness-110 active:scale-95 text-[#121212] font-black text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FACC15]/20"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                </button>
            </form>
        </div>
    );
}
