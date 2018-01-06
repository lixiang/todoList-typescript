<template>
  <div class="addTodo">
    <input type="text" v-model.trim="todoText" />
    <button @click="addTodo">增加</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class AddTodo extends Vue {
  name:string = 'addTodo'
  todoText:string = ''
  addTodo():void {
    this.$store.dispatch('addTodo', this.todoText)
    this.todoText = ''
  }
}
</script>

<style>
  input{
    width: 200px;
    height: 35px;
    border-radius: 2px;
    border: 1px solid #a5a5a5;
    margin-top: 10px;
    padding-left: 5px;
  }
  button{
    width: 90px;
    height: 37px;
    background-color: #42b983;
    color:white;
    border-radius: 2px;
    border:1px solid #42b983;
  }
  .addTodo{
    width: 310px;
    height: 40px;
    margin:0 auto;
  }
</style>