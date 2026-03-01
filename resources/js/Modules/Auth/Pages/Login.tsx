import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import FrontLayout from '../../../Layouts/FrontLayout';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <FrontLayout>
            <Head title="Iniciar Sesión" />

            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
                <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Bienvenido de nuevo</h2>
                        <p className="mt-2 text-sm text-slate-500">Ingresa tus credenciales para acceder a tu panel</p>
                    </div>

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full rounded-2xl border-slate-200 bg-white/50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    placeholder="tu@email.com"
                                    required
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>

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
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={e => setData('remember', e.target.checked)}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="text-sm text-slate-600">Recordarme</span>
                            </label>
                            <Link href="/forgot-password" title="recuperar" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-2xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98] disabled:opacity-70"
                        >
                            {processing ? 'Iniciando sesión...' : 'Entrar al CRM'}
                        </button>

                        <p className="text-center text-sm text-slate-500">
                            ¿No tienes cuenta?{' '}
                            <Link href="/register" className="font-bold text-indigo-600 hover:text-indigo-500">
                                Regístrate gratis
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </FrontLayout>
    );
}
