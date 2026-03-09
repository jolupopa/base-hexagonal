import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [events, setEvents] = useState<any[]>([]);

    // Native helpers to replace date-fns
    const getStartOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
    const getEndOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const getStartOfWeek = (date: Date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    };
    const getEndOfWeek = (date: Date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() + (6 - day);
        return new Date(d.setDate(diff));
    };

    const isSameDay = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    const isSameMonth = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth();

    const formatDate = (date: Date, formatStr: string) => {
        if (formatStr === 'yyyy-MM-dd') {
            return date.toISOString().split('T')[0];
        }
        if (formatStr === 'MMMM yyyy') {
            return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
        }
        if (formatStr === 'd') {
            return date.getDate().toString();
        }
        return date.toDateString();
    };

    const addMonths = (date: Date, n: number) => new Date(date.getFullYear(), date.getMonth() + n, 1);

    useEffect(() => {
        const start = formatDate(getStartOfWeek(getStartOfMonth(currentMonth)), 'yyyy-MM-dd');
        const end = formatDate(getEndOfWeek(getEndOfMonth(currentMonth)), 'yyyy-MM-dd');

        axios.get(`/api/calendar/events?start=${start}&end=${end}`)
            .then(res => setEvents(res.data));
    }, [currentMonth]);

    // Generate days for the grid
    const days: Date[] = [];
    let currentDay = getStartOfWeek(getStartOfMonth(currentMonth));
    const lastDay = getEndOfWeek(getEndOfMonth(currentMonth));

    while (currentDay <= lastDay) {
        days.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
    }

    return (
        <div className="rounded-2xl border border-[#333333] bg-[#242424] overflow-hidden">
            {/* Calendar Header */}
            <div className="flex items-center justify-between border-b border-[#333333] bg-[#1a1a1a] px-6 py-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">
                    {formatDate(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                        className="rounded-lg border border-[#333333] p-2 text-[#A0A0A0] hover:bg-[#242424] hover:text-white"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                        className="rounded-lg border border-[#333333] p-2 text-[#A0A0A0] hover:bg-[#242424] hover:text-white"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            {/* Grid Days of Week */}
            <div className="grid grid-cols-7 border-b border-[#333333] bg-[#1a1a1a]">
                {['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'].map((day) => (
                    <div key={day} className="py-3 text-center text-[10px] font-bold uppercase tracking-widest text-[#555555]">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7">
                {days.map((day, i) => {
                    const dayEvents = events.filter(e => isSameDay(new Date(e.start), day));
                    return (
                        <div
                            key={i}
                            className={`min-h-[120px] border-b border-r border-[#333333] p-2 transition-colors hover:bg-white/5 ${!isSameMonth(day, currentMonth) ? 'bg-[#1a1a1a]/50' : ''
                                }`}
                        >
                            <div className="flex justify-between">
                                <span className={`text-xs font-bold ${isSameDay(day, new Date()) ? 'text-[#FACC15]' : 'text-[#A0A0A0]'
                                    }`}>
                                    {formatDate(day, 'd')}
                                </span>
                            </div>

                            <div className="mt-2 space-y-1">
                                {dayEvents.map(event => (
                                    <div
                                        key={event.id}
                                        className="rounded-md px-2 py-1 text-[9px] font-bold truncate transition-transform hover:scale-105"
                                        style={{ backgroundColor: `${event.color}20`, color: event.color, border: `1px solid ${event.color}30` }}
                                        title={`${event.title} - ${event.client}`}
                                    >
                                        {event.start_display || ''} {event.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
