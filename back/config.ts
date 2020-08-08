import { get } from 'env-var';

const env = (name: string, required = true ) => get(name).required(required);

export const config = {
	port: env('PORT').asPortNumber(),
	airtableEndpoint: env('AIRTABLE_ENDPOINT').asString(),
	airtableApiKey: env('AIRTABLE_API_KEY').asString()
}
