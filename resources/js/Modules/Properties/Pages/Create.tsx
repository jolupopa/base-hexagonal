import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import propertyRoutes from '@/routes/properties';
import PropertyForm from '../Components/PropertyForm';

interface Props {
    ubigeos: any[];
    amenities: any[];
    categories: any[];
}

export default function Create({ ubigeos, amenities, categories }: Props) {
    return (
        <AdminLayout>
            <Head title="List New Property — EstateManager" />

            <div className="mx-auto max-w-5xl">
                <div className="mb-12 flex items-center gap-6">
                    <Link href={propertyRoutes.index.url()} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#333333] bg-[#1a1a1a] text-[#A0A0A0] hover:text-white transition-all">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-white">List New Property</h1>
                        <p className="mt-1 text-[#A0A0A0]">Showcase your premium asset to high-net-worth clients.</p>
                    </div>
                </div>

                <PropertyForm
                    ubigeos={ubigeos}
                    amenities={amenities}
                    categories={categories}
                    action={propertyRoutes.store.url()}
                />
            </div>
        </AdminLayout>
    );
}
