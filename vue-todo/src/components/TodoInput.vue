<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus"></i>
        </span>
    </div>
    <TodoModal v-if="showModal" @close="showModal=false">
        <template #header>경고</template>
        <template #body>입력값이 없어요</template>
    </TodoModal>
</template>
<script>
import TodoModal from '@/components/common/TodoModal'

export default {
    data(){
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods:{
        // 저장하는 역할
        addTodo: function(){
            if(this.newTodoItem!==''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal=true;
            }
            
        },
        // 초기화
        clearInput: function(){
            this.newTodoItem = "";
        }

    },
    components:{
        TodoModal,
    }
    

}
</script>
<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
    width: 90%;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>