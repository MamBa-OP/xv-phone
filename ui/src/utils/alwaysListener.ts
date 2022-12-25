import { ReceiveNUI } from "@utils/ReceiveNUI";
import { globalDataStore } from "@store/stores";

ReceiveNUI('phone:InitialData', (data) => {
    globalDataStore.update((n) => {
        n.user = data.user;
        n.time = data.time;
        n.background = data.background;
        return n;
    });
})