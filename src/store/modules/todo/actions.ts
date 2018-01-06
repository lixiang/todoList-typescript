import * as types from './type.ts'
import { ActionTree } from 'vuex';
import { State } from './index'

const action: ActionTree<State, any> = {
  addTodo({ commit }, todoText:string):void {
    commit(types.ADD_TODO, todoText)
  },
  doneTodo({ commit }, id:number):void {
    commit(types.DONE_TODO, id)
  },
  selectType({ commit }, type:string):void {
    commit(types.SELECT_TYPE, type)
  },
}

export default action
