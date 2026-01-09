import SupplyPageClient from './page-client';

export const metadata = {
    description: `Overview of the native token supply on Trezoa`,
    title: `Supply Overview | Trezoa`,
};

export default function SupplyPage() {
    return <SupplyPageClient />;
}
