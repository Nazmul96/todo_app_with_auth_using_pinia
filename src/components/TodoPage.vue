<script setup>
      import {ref,reactive} from 'vue';
      import todoStore from '../stores/todoStore';
      const todoStoreData = todoStore();
      
   const todoStatus = ref('');     
    const todoData = reactive({
        todo:'',
        completed:false,
        userId:1
    })

    function statusUpdate(){

    }

    function todoFilter(){
       if(todoStatus.value == 'done'){
            todoStoreData.doneTodo;
       }
       if(todoStatus.value == 'undone'){
            todoStoreData.undoneTodo;
       }
       else{
            todoStoreData.getTodos;
       }   
    }

</script>

<template>
      <div class="container">
            <div class="row mt-5 ml-5">
                  <div class="card col-md-8 bg-light">
                        <div class="card-body">
                              <form class="form-inline">
                                    <input class="form-control mr-sm-2 custom-input-width" type="text" placeholder="text new task" aria-label="Search" v-model="todoData.todo">
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="todoStoreData.action.todoAdd(todoData)">Add New Task</button>
                              </form>
                        </div>
                  </div>
            </div>

            <div class="row mt-3 ml-5">
                  <div class="card col-md-8 bg-light">
                        <div class="card-body">
                              <div class="row">
                                    <div class="col-md-6">
                                          <h4>All Tasks</h4>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                          <select name="" id="" class="form-control w-50" v-model="todoStatus" @click="todoFilter()">
                                                <option value="">Select</option>
                                                <option value="done">Done</option>
                                                <option value="undone">undone</option>
                                          </select> 
                                    </div>
                              </div>         
                                 
                              <table class="table table-striped">
                                    <thead>
                                          <tr>
                                                <th>SI</th>
                                                <th>Task Name</th>
                                                <th>Status</th>
                                                <th>Done/Undone</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr v-for="(todo,index) in todoStoreData.todos" :key="index">
                                                <td>{{todo.id}}</td>
                                                <td>{{todo.todo}}</td>
                                                <td>
                                                      <span class="badge badge-success" v-if="todo.completed == true">Done</span>
                                                      <span class="badge badge-warning" v-else="">Undone</span>
                                                </td>
                                                <th><input type="checkbox" class="form-contro text-center" style="width: 20px; height: 20px; text-align: center;" v-model="todo.completed" @click="statusUpdate()"></th>
                                                <td><button type="button" class="btn btn-sm btn-danger" @click="todoStoreData.action.todoDelete(todo.id)">Delete</button></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>                 
      </div>
</template>

<style scoped>
      .custom-input-width{
            width: 400px !important;
      }
</style>
