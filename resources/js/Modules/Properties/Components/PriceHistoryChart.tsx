import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { Listing } from '../Types';

interface Props {
    listings: Listing[];
}

const PriceHistoryChart: React.FC<Props> = ({ listings }) => {
    // Preparar datos para el gráfico
    // Invertimos y aplanamos el historial para tener una línea de tiempo
    const data = listings
        .slice()
        .reverse()
        .map(listing => ({
            date: listing.starts_at.display,
            price: Number(listing.price),
            fullDate: listing.starts_at.datetime
        }));

    if (data.length === 0) return null;

    return (
        <div className="w-full h-[300px] mt-6 bg-[#242424] p-4 rounded-xl border border-white/5 shadow-2xl">
            <h3 className="text-[#FACC15] font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse"></span>
                Historial de Precios
            </h3>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FACC15" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#FACC15" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis 
                        dataKey="date" 
                        stroke="#888" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis 
                        stroke="#888" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1a1a1a', 
                            border: '1px solid rgba(250, 204, 21, 0.2)',
                            borderRadius: '8px',
                            color: '#fff'
                        }}
                        itemStyle={{ color: '#FACC15' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#FACC15" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorPrice)" 
                        activeDot={{ r: 6, stroke: '#121212', strokeWidth: 2 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceHistoryChart;
