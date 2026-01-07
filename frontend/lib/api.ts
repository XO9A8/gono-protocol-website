// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    timestamp: string;
}

export interface Stats {
    assets_registered: string;
    active_users: string;
    partners: number;
    transactions: string;
    countries: number;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface ArchiveItem {
    id: number;
    emoji: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    hash: string;
    verified: boolean;
}

export interface Partner {
    id: number;
    name: string;
    category: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    features: string[];
    link: string;
}

export interface TokenInfo {
    symbol: string;
    name: string;
    total_supply: string;
    circulating_supply: string;
    features: TokenFeature[];
}

export interface TokenFeature {
    icon: string;
    title: string;
    description: string;
}

async function fetchApi<T>(endpoint: string): Promise<T | null> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const json: ApiResponse<T> = await response.json();
        return json.data;
    } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
        return null;
    }
}

export const api = {
    getStats: () => fetchApi<Stats>('/api/stats'),
    getFeatures: () => fetchApi<Feature[]>('/api/features'),
    getArchive: () => fetchApi<ArchiveItem[]>('/api/archive'),
    getPartners: () => fetchApi<Partner[]>('/api/partners'),
    getProducts: () => fetchApi<Product[]>('/api/products'),
    getToken: () => fetchApi<TokenInfo>('/api/token'),
};
