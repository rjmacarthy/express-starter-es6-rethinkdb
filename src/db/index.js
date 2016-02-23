import thinky from 'thinky';
import { config } from '../config/config';

const thnk = thinky({
    host: process.env.RDB_HOST || 'localhost',
    port: parseInt(process.env.RDB_PORT || config.rethinkPort),
    db: process.env.RDB_DB || 'Test'
});

const r = thnk.r;

export { thnk, r };
