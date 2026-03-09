import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import ClientLayout from '@/Layouts/ClientLayout';
import propertyRoutes from '@/routes/properties';
import admin from '@/routes/admin';
import SearchSidebar from '../Components/SearchSidebar';
import PropertyCard from '../Components/PropertyCard';

interface Props {
    properties: {
        data: any[];
        links: any[];
        meta: any;
    };
    stats: {
        total_listings: number;
        active_views: number;
        pending_deals: number;
        total_sales: number;
    };
    quotaInfo: {
        limit: number;
        current: number;
    };
    isAdmin: boolean;
    filters: any;
    categories: any[];
    amenities: any[];
}

const StatusBadge = ({ status, isDeleted }: { status: string; isDeleted?: boolean }) => {
    if (isDeleted) {
        return (
            <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest border bg-red-500/10 text-red-500 border-red-500/20">
                DELETED
            </span>
        );
    }

    const styles = {
        published: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
        draft: 'bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20',
        sold: 'bg-[#333333] text-[#A0A0A0] border-[#444444]',
        rented: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
        archived: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    };

    const label = status === 'published' ? 'ACTIVE' : status === 'draft' ? 'PENDING' : status === 'sold' ? 'SOLD' : status === 'rented' ? 'RENTED' : 'ARCHIVED';

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest border ${styles[status as keyof typeof styles] || styles.draft}`}>
            {label}
        </span>
    );
};

export default function Index({ properties, stats, quotaInfo, isAdmin, filters, categories, amenities }: Props) {
    const { delete: destroy, post, processing } = useForm();
    const [editingQuota, setEditingQuota] = useState<{ userId: string; name: string; limit: number } | null>(null);
    const quotaForm = useForm({ property_limit: 0 });

    const handleDelete = (id: string, force: boolean = false) => {
        if (confirm(force ? 'Are you sure you want to PERMANENTLY delete this property?' : 'Are you sure you want to delete this property?')) {
            if (force) {
                destroy(propertyRoutes.forceDelete.url(id));
            } else {
                destroy(propertyRoutes.destroy.url(id));
            }
        }
    };

    const handleUpdateQuota = (e: React.FormEvent) => {
        e.preventDefault();
        quotaForm.post(admin.users.updateQuota.url(editingQuota!.userId), {
            onSuccess: () => setEditingQuota(null),
        });
    };

    return (
        <ClientLayout>
            <Head title={isAdmin ? "Property Management — Admin" : "My Listings — EstateManager"} />

            <div className="space-y-8 pb-10">
                {/* Header Section */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-white">
                                {isAdmin ? 'Property Management' : 'My Listings'}
                            </h1>
                            <p className="text-[#A0A0A0] text-sm mt-1">
                                {isAdmin
                                    ? 'Oversee all property listings and manage user quotas across the organization.'
                                    : 'Manage and track the performance of your active property portfolio.'}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            {!isAdmin && (
                                <div className="hidden lg:flex flex-col items-end mr-4">
                                    <div className="text-[10px] font-black text-[#555555] uppercase tracking-widest mb-1">Quota Usage</div>
                                    <div className="flex items-center gap-3 w-48">
                                        <div className="flex-1 h-1.5 bg-[#242424] rounded-full overflow-hidden border border-[#333333]">
                                            <div
                                                className={`h-full transition-all duration-500 ${quotaInfo.current >= quotaInfo.limit ? 'bg-red-500' : 'bg-[#FACC15]'}`}
                                                style={{ width: `${Math.min((quotaInfo.current / quotaInfo.limit) * 100, 100)}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-white whitespace-nowrap">
                                            {quotaInfo.current} / {quotaInfo.limit}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <Link
                                href={propertyRoutes.create.url()}
                                className="flex items-center gap-2 bg-[#FACC15] hover:brightness-110 active:scale-95 text-[#121212] font-black text-xs px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#FACC15]/10"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                                ADD NEW PROPERTY
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: isAdmin ? 'Total Global Listings' : 'Your Listings', val: stats.total_listings, trend: '+2%', color: 'text-white' },
                        { label: 'Active Views', val: stats.active_views.toLocaleString(), trend: '+12%', color: 'text-white' },
                        { label: 'Pending Deals', val: stats.pending_deals, trend: '-1%', trendColor: 'text-red-400', color: 'text-white' },
                        { label: 'Total Volume', val: `$${(stats.total_sales / 1000000).toFixed(1)}M`, trend: '+5%', color: 'text-white' },
                    ].map((stat, i) => (
                        <div key={i} className="rounded-3xl border border-[#333333] bg-[#1a1a1a] p-6 group hover:border-[#FACC15]/30 transition-all shadow-xl shadow-black/20">
                            <div className="flex justify-between items-start">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555]">{stat.label}</p>
                                <span className={`text-[10px] font-bold ${stat.trendColor || 'text-[#10B981]'} flex items-center gap-1`}>
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    {stat.trend}
                                </span>
                            </div>
                            <p className={`mt-3 text-3xl font-black ${stat.color}`}>{stat.val}</p>
                        </div>
                    ))}
                </div>

                {/* Main Table Section */}
                <div className="rounded-3xl border border-[#333333] bg-[#1a1a1a] overflow-hidden shadow-2xl shadow-black/40">
                    <div className="p-5 border-b border-[#333333] flex justify-between items-center bg-[#1a1a1a]">
                        <div className="flex bg-[#242424] rounded-xl p-1 gap-1">
                            {['All Listings', 'Active', 'Sold'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-6 py-2.5 text-xs font-black rounded-lg transition-all ${tab === 'All Listings' ? 'bg-[#FACC15] text-[#121212] shadow-lg shadow-[#FACC15]/10' : 'text-[#555555] hover:text-white hover:bg-white/5'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#444444] group-focus-within:text-[#FACC15] transition-colors">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search in results..."
                                    className="bg-[#242424] border border-[#333333] rounded-xl py-2 pl-11 pr-4 text-xs text-white placeholder-[#444444] focus:outline-none focus:ring-2 focus:ring-[#FACC15]/20 focus:border-[#FACC15] transition-all w-64"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#333333] text-[10px] font-black uppercase tracking-[0.2em] text-[#555555] bg-[#1a1a1a]">
                                    <th className="px-8 py-5">Property</th>
                                    {isAdmin && <th className="px-8 py-5">Owner / Quota</th>}
                                    <th className="px-8 py-5">Price</th>
                                    <th className="px-8 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#333333]">
                                {properties.data.length > 0 ? properties.data.map((property) => (
                                    <tr key={property.id} className="group hover:bg-[#242424]/40 transition-all">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-2xl overflow-hidden bg-[#242424] border border-[#333333] shadow-inner relative group-hover:border-[#FACC15]/30 transition-all">
                                                    <img src={property.main_image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                    {property.is_featured && (
                                                        <div className="absolute top-1 left-1 bg-[#FACC15] text-[#121212] p-1 rounded-lg">
                                                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.425 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-white">{property.title}</p>
                                                    <p className="text-[10px] font-bold text-[#555555] uppercase tracking-wider mt-1 flex items-center gap-2">
                                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                        {property.address}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        {isAdmin && (
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-lg bg-[#242424] border border-[#333333] flex items-center justify-center text-[10px] font-black text-[#FACC15]">
                                                        {property.agent?.name?.substring(0, 1) || 'A'}
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-white">{property.agent?.name || 'Unknown'}</p>
                                                        <button
                                                            onClick={() => {
                                                                setEditingQuota({
                                                                    userId: property.agent?.id,
                                                                    name: property.agent?.name,
                                                                    limit: property.agent?.property_limit || 0
                                                                });
                                                                quotaForm.setData('property_limit', property.agent?.property_limit || 0);
                                                            }}
                                                            className="text-[10px] text-[#A0A0A0] hover:text-[#FACC15] transition-colors underline decoration-dotted"
                                                        >
                                                            Limit: {property.agent?.property_limit || 0}
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        )}
                                        <td className="px-8 py-5">
                                            <p className="text-sm font-black text-white">${Number(property.price).toLocaleString()}</p>
                                            <p className="text-[10px] font-bold text-[#555555] uppercase tracking-widest mt-0.5">{property.type} / {property.operation}</p>
                                        </td>
                                        <td className="px-8 py-5">
                                            <StatusBadge status={property.status} isDeleted={!!property.deleted_at} />
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                                {!property.deleted_at ? (
                                                    <>
                                                        <Link
                                                            href={propertyRoutes.edit.url(property.id)}
                                                            className="p-2.5 bg-[#242424] text-[#A0A0A0] hover:text-[#FACC15] rounded-xl border border-[#333333] hover:border-[#FACC15]/30 transition-all hover:scale-105"
                                                            title="Edit Property"
                                                        >
                                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(property.id)}
                                                            className="p-2.5 bg-[#242424] text-[#A0A0A0] hover:text-red-400 rounded-xl border border-[#333333] hover:border-red-500/30 transition-all hover:scale-105"
                                                            title="Delete Property"
                                                        >
                                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() => handleDelete(property.id, true)}
                                                        className="flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all text-[10px] font-black"
                                                        title="Permanently Delete"
                                                    >
                                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        FORCE DELETE
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={isAdmin ? 5 : 4} className="px-8 py-20 text-center">
                                            <div className="max-w-xs mx-auto">
                                                <div className="h-16 w-16 bg-[#242424] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#333333]">
                                                    <svg className="h-8 w-8 text-[#555555]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                </div>
                                                <p className="text-white font-bold">No properties found</p>
                                                <p className="text-[#A0A0A0] text-xs mt-1">Try adjusting your filters or search terms.</p>
                                                <Link href={propertyRoutes.create.url()} className="mt-6 inline-block text-[10px] font-black text-[#FACC15] uppercase tracking-[0.2em] hover:text-white transition-colors">
                                                    Create your first listing
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-8 border-t border-[#333333] flex justify-between items-center bg-[#1a1a1a]">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#555555]">
                            Showing <span className="text-white">{properties.data.length}</span> results of <span className="text-white">{properties.meta?.total || properties.data.length}</span>
                        </p>
                        <div className="flex gap-2">
                            {properties.meta?.last_page > 1 && properties.meta.links.map((link: any, i: number) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    preserveScroll
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    className={`h-9 min-w-[36px] px-3 flex items-center justify-center rounded-xl text-[10px] font-black transition-all ${link.active ? 'bg-[#FACC15] text-[#121212] shadow-lg shadow-[#FACC15]/10' : 'bg-[#242424] text-[#555555] hover:text-white border border-[#333333]'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quota Modal */}
            {editingQuota && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#121212]/90 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-[#1a1a1a] border border-[#333333] rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-black text-white">Update Quota</h3>
                        <p className="text-sm text-[#A0A0A0] mt-2">Adjust the maximum number of properties for <span className="text-[#FACC15]">{editingQuota.name}</span>.</p>

                        <form onSubmit={handleUpdateQuota} className="mt-8 space-y-6">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#555555] block mb-2">Maximum Properties</label>
                                <input
                                    type="number"
                                    value={quotaForm.data.property_limit}
                                    onChange={e => quotaForm.setData('property_limit', parseInt(e.target.value))}
                                    className="w-full bg-[#242424] border border-[#333333] rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]/20 focus:border-[#FACC15] transition-all"
                                    min="0"
                                    required
                                />
                                {quotaForm.errors.property_limit && <p className="text-red-400 text-xs mt-2">{quotaForm.errors.property_limit}</p>}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setEditingQuota(null)}
                                    className="flex-1 px-6 py-4 bg-[#242424] text-[#A0A0A0] font-black text-xs rounded-2xl hover:bg-[#333333] transition-all"
                                >
                                    CANCEL
                                </button>
                                <button
                                    type="submit"
                                    disabled={quotaForm.processing}
                                    className="flex-1 px-6 py-4 bg-[#FACC15] text-[#121212] font-black text-xs rounded-2xl hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                                >
                                    {quotaForm.processing ? 'SAVING...' : 'UPDATE QUOTA'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </ClientLayout>
    );
}
