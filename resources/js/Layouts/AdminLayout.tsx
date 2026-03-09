import React, { PropsWithChildren, useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { logout, dashboard } from '@/routes';
import admin from '@/routes/admin';
import profile from '@/routes/profile';

export default function AdminLayout({ children }: PropsWithChildren) {
    const { auth, flash } = usePage().props as any;
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebar_collapsed');
        return saved ? JSON.parse(saved) : false;
    });
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        localStorage.setItem('sidebar_collapsed', JSON.stringify(isSidebarCollapsed));
    }, [isSidebarCollapsed]);

    useEffect(() => {
        if (flash?.success) {
            setNotification({ message: flash.success, type: 'success' });
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
        if (flash?.error) {
            setNotification({ message: flash.error, type: 'error' });
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const can = (permission?: string) => {
        if (!permission) return true;
        const user = auth.user;
        if (user?.email === 'superusuario@demo.com' || user?.roles?.includes('admin')) {
            return true;
        }
        return user?.permissions?.includes(permission);
    };

    const isAdmin = auth.user?.email === 'superusuario@demo.com' || auth.user?.roles?.includes('admin');

    const navItems = [
        {
            name: 'Dashboard Admin',
            href: '/admin/dashboard',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            permission: 'users.manage'
        },
        {
            name: 'Usuarios',
            href: admin.users.index.url(),
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            permission: 'users.manage'
        },
        {
            name: 'Seguridad / ACL',
            href: admin.acl.index.url(),
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            permission: 'users.manage'
        },
        {
            name: 'Categorías',
            href: admin.categories.index.url(),
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
            ),
            permission: 'users.manage'
        },
        {
            name: 'Gestión Propiedades',
            href: admin.properties.management.index.url(),
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            permission: 'users.manage'
        },
    ];

    return (
        <div className="min-h-screen bg-[#121212] font-sans text-white flex">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 bg-[#1a1a1a] border-r border-[#333333] transition-all duration-300 ease-in-out flex flex-col ${isSidebarCollapsed ? 'w-20' : 'w-64'
                    }`}
            >
                {/* Logo Section */}
                <div className="h-20 flex items-center px-6 border-b border-[#333333]">
                    <Link href={dashboard.url()} className="flex items-center gap-3 group">
                        <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-[#FACC15] shadow-lg shadow-[#FACC15]/20 flex items-center justify-center transition-transform group-hover:scale-105">
                            <svg className="h-6 w-6 text-[#121212]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                            </svg>
                        </div>
                        {!isSidebarCollapsed && (
                            <span className="text-xl font-black tracking-tighter text-white animate-in fade-in duration-500">
                                Estate<span className="text-[#FACC15]">Manager</span>
                            </span>
                        )}
                    </Link>
                </div>

                {/* Nav Menu */}
                <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                    {navItems.filter(item => can(item.permission)).map((item) => {
                        const isActive = usePage().url.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${isActive
                                    ? 'bg-[#FACC15] text-[#121212] shadow-lg shadow-[#FACC15]/10'
                                    : 'text-[#A0A0A0] hover:bg-white/5 hover:text-white'
                                    }`}
                                title={isSidebarCollapsed ? item.name : ''}
                            >
                                <div className={`flex-shrink-0 transition-colors ${isActive ? 'text-[#121212]' : 'group-hover:text-[#FACC15]'}`}>
                                    {item.icon}
                                </div>
                                {!isSidebarCollapsed && (
                                    <span className="text-sm font-bold truncate animate-in flex-1">
                                        {item.name}
                                    </span>
                                )}
                                {!isSidebarCollapsed && isActive && (
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#121212]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Toggle */}
                <div className="p-4 border-t border-[#333333]">
                    <button
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        className="w-full flex items-center justify-center p-2 rounded-xl border border-[#333333] hover:border-[#FACC15] transition-all text-[#A0A0A0] hover:text-[#FACC15]"
                    >
                        <svg
                            className={`h-5 w-5 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div
                className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'pl-20' : 'pl-64'
                    }`}
            >
                {/* Top Header */}
                <header className="sticky top-0 z-40 h-20 border-b border-[#333333] bg-[#1a1a1a]/80 backdrop-blur-xl flex items-center justify-end px-8">
                    {/* Actions */}
                    <div className="flex items-center gap-6">

                        {/* Notifications (Mock) */}
                        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-[#242424] border border-[#333333] text-[#A0A0A0] hover:text-white transition-all">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[#FACC15]" />
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="flex items-center gap-3 p-1 rounded-2xl hover:bg-white/5 transition-all outline-none"
                            >
                                <div className="h-10 w-10 rounded-xl overflow-hidden ring-2 ring-[#FACC15]/20 bg-[#242424] flex items-center justify-center border border-[#333333]">
                                    {auth?.user?.avatar_url ? (
                                        <img src={auth.user.avatar_url} alt={auth.user.name} className="h-full w-full object-cover" />
                                    ) : (
                                        <span className="text-sm font-bold text-[#FACC15]">{auth?.user?.initials ?? 'U'}</span>
                                    )}
                                </div>
                                <div className="hidden lg:block text-left pr-2">
                                    <p className="text-xs font-black text-white truncate max-w-[120px]">{auth?.user?.name}</p>
                                    <p className="text-[10px] text-[#555555] font-bold uppercase tracking-tighter">
                                        {auth?.user?.roles?.[0] || 'User'}
                                    </p>
                                </div>
                                <svg className={`h-4 w-4 text-[#444444] transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isProfileMenuOpen && (
                                <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl border border-[#333333] bg-[#1a1a1a] p-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in slide-in-from-top-2">
                                    <div className="px-4 py-4 border-b border-[#333333] mb-1">
                                        <p className="text-sm font-bold text-white truncate">{auth?.user?.name}</p>
                                        <p className="text-xs text-[#555555] truncate mt-0.5">{auth?.user?.email}</p>
                                    </div>
                                    <div className="py-1">
                                        <Link href={profile.show.url()} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#A0A0A0] hover:bg-white/5 hover:text-white rounded-xl transition-all">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            Account Settings
                                        </Link>
                                        <Link href={profile.update.url()} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#A0A0A0] hover:bg-white/5 hover:text-white rounded-xl transition-all">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            Preferences
                                        </Link>
                                    </div>
                                    <div className="pt-1 mt-1 border-t border-[#333333]">
                                        <Link href={logout.url()} method="post" as="button" className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-left">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                            Logout Application
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content Holder */}
                <main className="flex-1 p-8 relative">
                    {/* Notification Toast */}
                    {notification && (
                        <div className="fixed top-24 right-8 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className={`flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-4 shadow-2xl backdrop-blur-md ${notification.type === 'success' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-red-500/10 text-red-400'}`}>
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${notification.type === 'success' ? 'bg-[#10B981]/20' : 'bg-red-500/20'}`}>
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={notification.type === 'success' ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-black uppercase tracking-widest">{notification.type === 'success' ? 'Success' : 'Error'}</p>
                                    <p className="text-xs text-[#A0A0A0]">{notification.message}</p>
                                </div>
                                <button onClick={() => setNotification(null)} className="ml-4 p-1 hover:bg-white/5 rounded-lg transition-all">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                    )}

                    {children}

                    {/* Footer Section */}
                    <footer className="mt-20 pt-10 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-6 pb-10">
                        <div className="flex items-center gap-4">
                            <div className="h-6 w-6 rounded bg-[#333333] flex items-center justify-center">
                                <svg className="h-4 w-4 text-[#A0A0A0]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /></svg>
                            </div>
                            <p className="text-xs font-bold text-[#555555]">EstateManager © 2024</p>
                        </div>
                        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#555555]">
                            <button className="hover:text-white transition-colors">Privacy Policy</button>
                            <button className="hover:text-white transition-colors">Terms of Service</button>
                            <button className="hover:text-white transition-colors">Support Center</button>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
