import thinky from 'thinky';
import { config } from '../config/config';

const thnk = thinky(config.rethink);

const r = thnk.r;

export { thnk, r };