import * as types from './type.ts'
import { MutationTree } from 'vuex'
import { State, todoInfo } from './index'

const mutation: MutationTree<State> = {
  [types.ADD_TODO](state:State, todoText:string):void {
    console.log(todoText)
    if (todoText) {
      const todoInfo:todoInfo = {
        id:0,
        text:'',
        isDone:false
      }
      todoInfo.isDone = false
      if (state.todoList.length === 0) {
        todoInfo.id = 0
      } else if (state.todoList.length > 0) {
        const todoFirst = state.todoList[state.todoList.length - 1]
        console.log(todoFirst.text + ' , ' + todoFirst.id)
        todoInfo.id = todoFirst.id + 1
      }
      todoInfo.text = todoText
      state.todoList.push(todoInfo)
    }
  },
  [types.DONE_TODO](state:State, id:number):void {
    /* eslint-disable */
    state.todoList.map((item) => {
      console.log(item.id)
      if (item.id === id) {
        item.isDone = true
      }
    })
  },
  [types.SELECT_TYPE](state:State, type:string):void {
    console.log(type)
    state.selected = type;
  },
}

export default mutation
