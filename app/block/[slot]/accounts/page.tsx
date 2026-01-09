import { Metadata } from 'next/types';

import BlockAccountsTabClient from './page-client';

type Props = Readonly<{
    params: {
        slot: string;
    };
}>;

export async function generateMetadata({ params: { slot } }: Props): Promise<Metadata> {
    return {
        description: `Statistics pertaining to accounts which were accessed or written to during block ${slot} on Trezoa`,
        title: `Accounts Active In Block | ${slot} | Trezoa`,
    };
}

export default function BlockAccountsTab(props: Props) {
    return <BlockAccountsTabClient {...props} />;
}
