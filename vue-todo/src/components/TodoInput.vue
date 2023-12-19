<template>
    <div class="input">
        <input type="text" v-model="newTodoItem">
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: "",
        }
    }

}
</script>
<style scoped>

</style>