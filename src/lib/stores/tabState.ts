import { writable } from "svelte/store";

export enum TabState {
    Details,
    Portfolio,
    Connect
}

const tabState = writable(TabState.Details);

export default tabState;