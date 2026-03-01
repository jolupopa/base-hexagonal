import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import FrontLayout from '../../../Layouts/FrontLayout';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        company_name: '', // Mandatory for multi-tenancy registration
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <FrontLayout>
            <Head title="Registro" />

            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 py-12">
                <div className="w-full max-w-lg space-y-8 rounded-3xl border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Crea tu cuenta</h2>
                        <p className="mt-2 text-sm text-slate-500">Empieza a gestionar tus propiedades como un profesional</p>
                    </div>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Nombre Comercial de la Empresa</label>
                                <input
                                    type="text"
                                    value={data.company_name}
                                    onChange={e => setData('company_name', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    placeholder="Inmobiliaria Premium SAC"
                                    required
                                />
                                {errors.company_name && <p className="mt-1 text-xs text-red-500">{errors.company_name}</p>}
                                <p className="mt-1 text-[10px] text-slate-400 ml-1">Este será tu tenant principal.</p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Tu Nombre</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        placeholder="Juan Pérez"
                                        required
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        placeholder="juan@empresa.com"
                                        required
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Contraseña</label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        placeholder="••••••••"
                                        required
                                    />
                                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Confirmar</label>
                                    <input
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={e => setData('password_confirmation', e.target.value)}
                                        className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" required className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-xs text-slate-600">Acepto los <a href="#" className="underline">términos y condiciones</a> de uso del SaaS.</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-2xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98] disabled:opacity-70"
                        >
                            {processing ? 'Creando cuenta...' : 'Registrar Empresa y Usuario'}
                        </button>

                        <p className="text-center text-sm text-slate-500">
                            ¿Ya tienes una empresa?{' '}
                            <Link href="/login" className="font-bold text-indigo-600 hover:text-indigo-500">
                                Inicia sesión
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </FrontLayout>
    );
}
