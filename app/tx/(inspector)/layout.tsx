import { Metadata } from 'next/types';
import React from 'react';

type Props = Readonly<{
    children: React.ReactNode;
    params: Readonly<{
        signature: string;
    }>;
}>;

export async function generateMetadata({ params: { signature } }: Props): Promise<Metadata> {
    if (signature) {
        return {
            description: `Interactively inspect the Trezoa transaction with signature ${signature}`,
            title: `Transaction Inspector | ${signature} | Trezoa`,
        };
    } else {
        return {
            description: `Interactively inspect Trezoa transactions`,
            title: `Transaction Inspector | Trezoa`,
        };
    }
}

export default function TransactionInspectorLayout({ children }: Props) {
    return children;
}
