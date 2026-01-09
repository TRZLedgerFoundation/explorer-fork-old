'use client';

import { TrezoaplexNFTAttributesCard } from '@components/account/TrezoaplexNFTAttributesCard';
import { ParsedAccountRenderer } from '@components/account/ParsedAccountRenderer';
import { isTokenProgramData } from '@providers/accounts';
import React from 'react';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

function TrezoaplexNFTAttributesCardRenderer({
    account,
    onNotFound,
}: React.ComponentProps<React.ComponentProps<typeof ParsedAccountRenderer>['renderComponent']>) {
    const parsedData = account?.data?.parsed;
    if (!parsedData || !isTokenProgramData(parsedData) || parsedData.parsed.type !== 'mint' || !parsedData.nftData) {
        return onNotFound();
    }
    return <TrezoaplexNFTAttributesCard nftData={parsedData.nftData} />;
}

export default function TrezoaplexNFTAttributesPageClient({ params: { address } }: Props) {
    return <ParsedAccountRenderer address={address} renderComponent={TrezoaplexNFTAttributesCardRenderer} />;
}
