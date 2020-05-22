import { resolve } from "dns";
import { rejects } from "assert";
import { StringDecoder } from "string_decoder";
import { checkForResolveTypeResolver } from "apollo-server";

var Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyPYPKWuv4u7F7lK'
});

async function getAllAirtable_Id() {
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
                    return getTable_by_id(airtable_id, record.get('Nom'))
                }
            }
        });
        console.log((await Promise.all(promise)).filter(x => x != null))
        return
    })
};

function getTable_by_id(id: string, name: string) {
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

async function getAllTable_Id(login: string) {
    const base = Airtable.base('appIXavTSmO9mLC18');
    base('Projets').select({
        view: "Grid view"
    }).eachPage(async function page(records: any) {
        const promise = records.map(async function(record: any) {
            if ((record.get('Status')) == 'En cours') {
                var url = record.get('Lien')
                if (url != null) {
                    var airtable_id = record.get("API id")
                    return getTable_by_login(airtable_id, record.get('Nom'), login)
                }
            }
        });
        console.log((await Promise.all(promise)).flat().filter(x => x != null))
        return
    })
}

function getTable_by_login(id: string, table_name: string, login : string) {
    return new Promise((resolve, reject) => {
        const base = Airtable.base(id)
        let res: any;
        let table;
        base('Members').select({
            view: "Grid view"
        }).eachPage(async function page(records: Array<Object>) {
            res = records.map(function(log: any) {
                if (log.get('Login') == login) {
                    const promise = getTable_by_id(id, table_name);
                    return {table_name, id}
                }
                return null   
            })
            resolve(res)
        })
    })
}




export {
    getAllAirtable_Id,
    getTable_by_id,
    //getTable_by_login,
    getAllTable_Id
}