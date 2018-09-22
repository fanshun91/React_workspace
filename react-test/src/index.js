import React from 'react';
import ReactDOM from 'react-dom';

// import TodoList from './components/TodoList';
// import AntdTodo from './components/AntdTodo'
// import ForTest from './components/ForTest'
// import TodoListX from './practice/components/TodoList'
import TodoList from './review/TodoList'
import { Provider } from 'react-redux'
import store from './review/store'

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

