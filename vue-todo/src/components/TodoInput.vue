<template>
    <div class="input">
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">add</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: "",
        }
    },
    methods:{
        // 저장하는 역할
        addTodo: function(){
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.clearInput();
        },
        // 초기화
        clearInput: function(){
            this.newTodoItem = "";
        }

    }

}
</script>
<style scoped>

</style>