import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import NFTAttributesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Attributes of the Trezoaplex NFT with address ${props.params.address} on Trezoa`,
        title: `Trezoaplex NFT Attributes | ${await getReadableTitleFromAddress(props)} | Trezoa`,
    };
}

export default function TrezoaplexNFTAttributesPage(props: Props) {
    return <NFTAttributesPageClient {...props} />;
}
