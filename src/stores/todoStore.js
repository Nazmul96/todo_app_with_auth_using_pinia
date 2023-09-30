import {ref, reactive, computed} from 'vue';
import {defineStore} from 'pinia';

const todoStore = defineStore('todo', () =>{
    const baseUrl = 'https://dummyjson.com/todos';

    const todos = reactive([]);

    const undoneTodo = computed(() =>{
        const uncompleteTodo = todos.filter((todo) => !todo.completed).reverse();
        Object.assign(todos, uncompleteTodo)
        console.log(uncompleteTodo)
    });

    const doneTodo = computed(() => {
        const completeTodo = todos.filter((todo) => todo.completed).reverse();
        Object.assign(todos, completeTodo)
        console.log(completeTodo)
    });

    const action = {
        getTodos: () => {
            fetch(baseUrl)
            .then(res => res.json())
            .then((res) => {
                Object.assign(todos, res.todos)
            });          
        },
        todoAdd:(todoData) => {
            fetch(`${baseUrl}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(todoData)
            })
            .then(res => res.json())
            .then(res =>{
                todos.push(res);
            });
        },
        todoDelete: (id) => {
            fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(res => {
                const index = todos.findIndex(data => data.id == id)
                todos.splice(index,1);
            });
        }
    }

    return {todos,action,undoneTodo,doneTodo};
});

export default todoStore;