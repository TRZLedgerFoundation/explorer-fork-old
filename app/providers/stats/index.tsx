import { TrezoaPingProvider } from '@providers/stats/TrezoaPingProvider';
import React from 'react';

import { TrezoaClusterStatsProvider } from './trezoaClusterStats';

type Props = { children: React.ReactNode };
export function StatsProvider({ children }: Props) {
    return (
        <TrezoaClusterStatsProvider>
            <TrezoaPingProvider>{children}</TrezoaPingProvider>
        </TrezoaClusterStatsProvider>
    );
}
