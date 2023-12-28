<template>
    <div class="input">
        <ul>
            <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{textCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todoItems:[],
        }
    },
    methods:{
        removeTodo: function(todoItem, index){
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete(todoItem, index){
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        }

    },

    created(){
        console.log("created");
        // 로컬에 데이터가 있다면
        if(localStorage.length >0){
            for(var i=0; i< localStorage.length; i++){
                if(localStorage.key(i)!== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding-left:0px;
    margin-top: 0;
    text-align: left;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px
}
.checkBtn{
    line-height: 45px;
    color:#62acde;
    margin-right: 5px;
}
.chechBtnCompleted{
    color: #b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
</style>