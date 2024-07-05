import PocketBase from "pocketbase";
import { env } from "$env/dynamic/private";

const prod = true;

export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase(prod ? env.POCKETBASE_URL : env.POCKETBASE_DEV_URL);

    const response = await resolve(event);
    return response;
}