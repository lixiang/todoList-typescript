<template>
  <div>
    <addTodo></addTodo>
    <todoList></todoList>
  </div>
</template>

<script>
import addTodo from '../components/addTodo'
import todoList from '../components/todoList'

export default {
  data() {
    return {}
  },
  components: {
    addTodo,
    todoList,
  },
}
</script>

<style>

</style>
