import { getHashedName, getNameAccountKey, getNameOwner } from '@bonfida/tpl-name-service';
import { Connection, PublicKey } from '@trezoa/web3.js';

// Address of the TRZ TLD
export const TRZ_TLD_AUTHORITY = new PublicKey('58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx');

async function getDomainKey(name: string, nameClass?: PublicKey, nameParent?: PublicKey) {
    const hashedDomainName = await getHashedName(name);
    const nameKey = await getNameAccountKey(hashedDomainName, nameClass, nameParent);
    return nameKey;
}

export interface DomainInfo {
    name: string;
    address: PublicKey;
}

export const hasDomainSyntax = (value: string) => {
    return value.length > 4 && value.substring(value.length - 4) === '.sol';
};

// returns non empty wallet string if a given .sol domain is owned by a wallet
export async function getDomainInfo(domain: string, connection: Connection) {
    const domainKey = await getDomainKey(
        domain.slice(0, -4), // remove .sol
        undefined,
        TRZ_TLD_AUTHORITY
    );
    try {
        const registry = await getNameOwner(connection, domainKey);
        return registry && registry.registry.owner
            ? {
                  address: domainKey.toString(),
                  owner: registry.registry.owner.toString(),
              }
            : null;
    } catch {
        return null;
    }
}
