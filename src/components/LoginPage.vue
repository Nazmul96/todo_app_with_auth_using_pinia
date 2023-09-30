<script setup>
    import {ref, reactive} from 'vue';
    import authStore from '../stores/authStore';

    const auth = authStore();
    const email = ref('');
    const password = ref('');
</script>
<template>
   <div class="container">
        <div class="row">
            <h2> Default Credential : <span>email:nazmul@gmail.com</span> , <span>password:123456</span></h2>
            <div class="col-md-5" id="login_form">
                <form>
                    <h4 class="text-center">Login Form</h4>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="password">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" class="btn btn-primary mb-2" @click="auth.login(email,password)">Submit</button>
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