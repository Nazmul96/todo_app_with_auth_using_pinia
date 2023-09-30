<script setup>
    import authStore from '../stores/authStore';
    const auth = authStore();
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container">
            <a class="navbar-brand" href="#">Todo App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style="float: right;">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" :to="`/`">Home</RouterLink>
                    </li>
                    <template v-if="auth.isAuthenticated != true">  
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" :to="`/login`">Login</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" :to="`/register`">Registration</RouterLink>
                        </li>
                    </template> 
                    <li class="nav-item" v-if="auth.isAuthenticated == true">
                        <RouterLink class="nav-link active" aria-current="page" :to="`/todo`">Todo</RouterLink>
                    </li>  
                </ul>
                <button class="btn btn-sm btn-primary float-end" v-if="auth.isAuthenticated == true" type="button" @click="auth.logout()">
                    Logout
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>