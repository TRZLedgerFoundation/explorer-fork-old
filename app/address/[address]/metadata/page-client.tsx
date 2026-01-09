'use client';

import { TrezoaplexMetadataCard } from '@components/account/TrezoaplexMetadataCard';
import { ParsedAccountRenderer } from '@components/account/ParsedAccountRenderer';
import { isTokenProgramData } from '@providers/accounts';
import React from 'react';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

function TrezoaplexMetadataCardRenderer({
    account,
    onNotFound,
}: React.ComponentProps<React.ComponentProps<typeof ParsedAccountRenderer>['renderComponent']>) {
    const parsedData = account?.data?.parsed;
    if (!parsedData || !isTokenProgramData(parsedData) || parsedData.parsed.type !== 'mint' || !parsedData.nftData) {
        return onNotFound();
    }
    return <TrezoaplexMetadataCard nftData={parsedData.nftData} />;
}

export default function TrezoaplexNFTMetadataPageClient({ params: { address } }: Props) {
    return <ParsedAccountRenderer address={address} renderComponent={TrezoaplexMetadataCardRenderer} />;
}
