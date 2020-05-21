import { resolve } from "dns";
import { rejects } from "assert";

var Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyPYPKWuv4u7F7lK'
});

async function getAirtable_Id() {
    const base = Airtable.base('appIXavTSmO9mLC18');
    base('Projets').select({
        view: "Grid view"
    }).eachPage(async function page(records: any) {
        const promise = records.map(async function(record: any) {
            if ((record.get('Status')) == 'En cours') {
                var url = record.get('Lien')
                if (url != null) {
                    var airtable_id = record.get("API id")
                    console.log('Retrieved', record.get('Nom'), 'and table id = ', airtable_id)
                    console.log('\n');
                    return getTableInfo(airtable_id, record.get('Nom'))
                }
            }
        });
        console.log((await Promise.all(promise)).filter(x => x != null))
        return
    })
};

function getTableInfo(id: string, name: string) {
    return new Promise((resolve, reject) => {
        const base = Airtable.base(id)
        base('Tasks').select({
            view: "All Tasks"
        }).eachPage(function page(records: Array<Object>) {
            resolve({
                id,
                name,
                records: records.map(function(record: any) {
                    return record.get("Task name")
                })
            })
        })
    })
}

export {
    getAirtable_Id,
    getTableInfo
}