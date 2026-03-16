export interface Address {
    id: string;
    ubigeo_id: string;
    address: string;
    reference?: string;
    latitude?: number;
    longitude?: number;
    created_at: FormattedDate;
}

export interface Listing {
    id: string;
    price: number;
    currency: string;
    description?: string;
    status: 'draft' | 'active' | 'pending' | 'reserved' | 'sold' | 'rented' | 'expired' | 'withdrawn' | 'cancelled';
    starts_at: FormattedDate;
    ends_at?: FormattedDate;
    days_on_market?: number;
    price_history: Array<{
        price: number;
        currency: string;
        date: string;
    }>;
    changes?: any;
    created_at: FormattedDate;
}

export interface Amenity {
    id: string;
    name: string;
    icon?: string;
}

export interface Property {
    id: string;
    title: string;
    description?: string;
    type: 'house' | 'apartment' | 'commercial' | 'land' | 'office';
    operation: 'sale' | 'rent';
    price: number;
    currency: string;
    area_total: number;
    area_built?: number;
    bedrooms: number;
    bathrooms: number;
    parking_spots: number;
    status: 'draft' | 'published' | 'archived' | 'sold' | 'rented';
    is_featured: boolean;
    address?: Address;
    listings?: Listing[];
    active_listing?: Listing;
    amenities?: Amenity[];
    user: {
        id: string;
        name: string;
    };
    created_at: FormattedDate;
}

export interface FormattedDate {
    iso: string;
    human: string;
    display: string;
    datetime: string;
    time: string;
    timestamp: number;
}
