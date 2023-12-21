<template>
    <div class="input">
        <ul>
            <li v-for="todoItem in todoItems" :key="todoItem">{{todoItem}}</li>
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

    created(){
        console.log("created");
        // 로컬에 데이터가 있다면
        if(localStorage.length >0){
            for(var i=0; i< localStorage.length; i++){
                if(localStorage.key(i)!== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style scoped>

</style>