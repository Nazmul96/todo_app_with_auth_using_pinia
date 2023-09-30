import {ref, reactive} from 'vue';
import router from '../router/index';
import {defineStore} from 'pinia';

import todoStore from './todoStore';

const authStore = defineStore('auth', () => {
    const isAuthenticated = ref(localStorage.getItem('isAuthenticated'));
    const user = ref({
        email:'nazmul@gmail.com',
        password:'123456',
    });

    const login = (email, password) => {

            if(localStorage.getItem('user') !== null)
            {
                user.value = JSON.parse(localStorage.getItem('user'));
            }
      
            if(user.value.email == email && user.value.password == password){
                localStorage.setItem('isAuthenticated',true);
                isAuthenticated.value = true;
                todoStore().action.getTodos();
                router.push('/todo');
            }
            else{
                alert("Credential did not matched")
            }
       
    };

    const register = (formData) => {
        if(localStorage.setItem('user', JSON.stringify(formData))){
            return formData;
        }
        router.push('/login');
    };
    const logout = () => {
        localStorage.setItem('isAuthenticated',false);
        isAuthenticated.value = false;
        localStorage.removeItem('user');
        router.push('/login');
    };

    return {isAuthenticated,user,login,register,logout};
});

export default authStore;    