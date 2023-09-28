import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig  = {
    name: 'MyDb',
    version: 1,
    objectStoresMeta: [{
        store: 'tasks',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'title', keypath: 'title', options: { unique: false } },
            { name: 'status', keypath: 'status', options: { unique: false } }
        ]
    }]
};
