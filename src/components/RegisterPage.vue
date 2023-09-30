<script setup>
     import {ref, reactive} from 'vue';
     import authStore from '../stores/authStore';

     const auth = authStore();
     const registerData = ({
        email:"",
        password:"",
        conPassword:""
     });

     function userRegister(){
        if(registerData.email == '' ||  registerData.password == '' || registerData.conPassword == ''){
            alert("please fill the input filed");
        }
        if(registerData.password != registerData.conPassword){
            alert("Password and Confirm password did not matched");
        }
        if(registerData.password.length <= 4){
            alert("Password lenth should be greater than or equal to four");
        }

        auth.register(registerData);
     }
</script>
<template>
   <div class="container">
        <div class="row">

            <div class="col-md-5" id="login_form">
                <form>
                    <h4 class="text-center">Register Form</h4>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="registerData.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="registerData.password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" v-model="registerData.conPassword">
                    </div>
           
                    <button @click="userRegister()" type="button" class="btn btn-primary mb-2">Submit</button>
                </form>
          </div>
        </div>
   </div>
</template>

<style scoped>
   #login_form{
        margin:100px auto 0px auto;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
   }
</style>