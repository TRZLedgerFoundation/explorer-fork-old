import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import TrezoaplexNFTMetadataPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Metadata for the Trezoaplex NFT with address ${props.params.address} on Trezoa`,
        title: `Trezoaplex NFT Metadata | ${await getReadableTitleFromAddress(props)} | Trezoa`,
    };
}

export default function TrezoaplexNFTMetadataPage(props: Props) {
    return <TrezoaplexNFTMetadataPageClient {...props} />;
}
