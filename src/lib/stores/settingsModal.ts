import { writable } from "svelte/store";

const settingsModalVisible = writable(false);

export default settingsModalVisible;