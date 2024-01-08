import Vuex from 'vuex';

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length >0){
            for(let i=0; i< localStorage.length; i++){
                if(localStorage.key(i)!== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        headerText: "할일",
        todoItems: storage.fetch(),

    },
    mutations: {
        addOneItem(state, payload) {
            const obj = {completed:false, item:payload }
            state.todoItems.push(obj);
            localStorage.setItem(payload, JSON.stringify(obj));
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload){
            console.log('receive');
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(state.todoItems[payload.index].item);
            localStorage.setItem(state.todoItems[payload.index].item, JSON.stringify(state.todoItems[payload.index]))
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
        
    }
});