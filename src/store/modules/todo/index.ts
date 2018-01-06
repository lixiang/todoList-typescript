import actions from './actions.ts'
import mutations from './mutations.ts'

export interface todoInfo {
  id:number,
  text: string,
  isDone: boolean,
}

export interface State {
  todoList: todoInfo[],
  todoInfo: todoInfo,
  selected: string
}

const state: State = {
  todoList: [],
  todoInfo: {
    id: 0,
    text: '',
    isDone: false,
  },
  selected: '0',
}

export default {
  state,
  actions,
  mutations,
  getters: {
    /* eslint-disable */
    filterDoned(state:State):todoInfo[] {
      const todoList = state.todoList.filter((item) => {
        if (item.isDone) {
          return item
        }
      })
      return todoList
    },
    filterNoDoned(state:State):todoInfo[] {
      const todoList = state.todoList.filter((item) => {
        if (!item.isDone) {
          return item
        }
      })
      return todoList
    },
  },
}
