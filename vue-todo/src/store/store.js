import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
        count: 0,
        headerText: "할일",
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});