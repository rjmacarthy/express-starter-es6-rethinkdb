import thinky from 'thinky';
import { config } from '../config/config';

var instance = ({
    host: process.env.RDB_HOST || 'localhost',
    port: parseInt(process.env.RDB_PORT || config.rethinkPort),
    db: process.env.RDB_DB || 'Test'
});

const thnk = thinky();
const r = thnk.r;

export { instance, thnk, r };
