<template>
    <div class="text-c title">
        <slot></slot>
        <span>{{title}}</span>
    </div>
</template>

<script>
	
    export default {
        name: "Header",
        props:{
            title:{
                type:String,
                default:""
            }
        }

    }
</script>

<style scoped>
   
</style>
