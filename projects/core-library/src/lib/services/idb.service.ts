import { openDB } from "idb";

export function createDB(database: string, ...stores: string[]) {
    openDB(database, 1, {
        upgrade(db) {
            stores.forEach(
                store => db.createObjectStore(store)
            );
        },
    });
}

export async function addItem(database: string, store: string, data: any, key: string) {
    const db = await openDB(database, 1);
    db.add(store, data, key).catch(err => console.log('Error:', err));
    db.close();
}

export async function getItem(database: string, store: string, key: string) {
    const db = await openDB(database, 1);
    db.get(store, key).then(console.log);
    db.close();
}

export async function clearStore(database: string, store: string) {
    const db = await openDB(database, 1);
    db.clear(store);
    db.close();
}
