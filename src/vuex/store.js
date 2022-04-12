import { createStore } from 'vuex';

export const store = createStore({
    state () {
        return {
            autoConnect: true,
            userSOLBalance: 0
        }
    },
    mutations: {
        setAutoConnect (state) {
            state.autoConnect = !state.autoConnect
        },
        setBalance (state, payload) {
            state.userSOLBalance = payload.balance
        }
    }
});
