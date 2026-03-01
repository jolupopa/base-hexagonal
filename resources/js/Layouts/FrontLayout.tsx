import React, { PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';

export default function FrontLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header / Navbar */}
            <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-indigo-600 shadow-lg shadow-indigo-200"></div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">RealState<span className="text-indigo-600">CRM</span></span>
                    </div>
                    
                    <div className="hidden items-center gap-8 md:flex">
                        <Link href="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Inicio</Link>
                        <Link href="/propiedades" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Propiedades</Link>
                        <Link href="/precios" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Precios</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Iniciar Sesión</Link>
                        <Link href="/register" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
                            Comenzar Gratis
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-16">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="border-t border-slate-200 bg-white py-12 mt-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded bg-slate-400"></div>
                            <span className="text-lg font-bold text-slate-900">RealStateCRM</span>
                        </div>
                        <p className="text-sm text-slate-500">© 2026 RealStateCRM. Desarrollado con Hexagonal Architecture.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Twitter</a>
                            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
