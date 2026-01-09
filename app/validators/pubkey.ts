import { PublicKey } from '@trezoa/web3.js';
import { coerce, instance, string } from 'superstruct';

export const PublicKeyFromString = coerce(instance(PublicKey), string(), value => new PublicKey(value));
