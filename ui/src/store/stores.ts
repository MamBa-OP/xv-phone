import { writable } from "svelte/store";
import type { GlobalData } from "@types/GlobalData";

export const visibility = writable(false);
export const browserMode = writable(false);


export const UIType = writable( localStorage.getItem("UIType") || "ios");
UIType.subscribe((value) => {
    localStorage.setItem("UIType", value);
});

export const globalDataStore = writable<GlobalData>({
    user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        },
    time: "",
    background: "",
    });
