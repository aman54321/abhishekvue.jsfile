<template>

<div class="bg-color">
<div class="container">

<!-- <input type="checkbox" id="check"> -->
<div class="login form">
  <header>Login</header>

  <form action="#">
    <input v-model="email" type="email" id="email" placeholder="Enter your email" required>
    <input v-model="password" type="password" id="password" placeholder="Enter your password" required>

    <!-- <a href="#">Forgot password?</a> -->
    <button class="btn btn-dark btn-lg btn-block" type="submit" v-on:click.prevent = "login()">
        Login</button>
  </form>


  <div class="signup">
    <span class="signup">Don't have an account?
      <router-link :to="{name: 'signup'}">Signup?</router-link>
     <!-- <label for="check">Signup</label> -->
    </span>
  </div>
</div>
</div>
</div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        show: false,
        user: null,
      }
    },
    methods: {
      login() {
        axios.post('http://10.8.10.240:8000/login/', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token.access)
          this.$router.push('/showtable')
        })
        .catch(error => {
          console.log(error.response.data)
        })
      },
    },
  }
  </script>
  

   
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.bg-color{
  min-height: 100vh;
  width: 100%;
  background: #009579;
}
.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 430px;
  width: 100%;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
}
.container .registration{
  display: none;
}
#check:checked ~ .registration{
  display: block;
}
#check:checked ~ .login{
  display: none;
}
#check{
  display: none;
}
.container .form{
  padding: 2rem;
}
.form header{
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
}
 .form input{
   height: 60px;
   width: 100%;
   padding: 0 15px;
   font-size: 17px;
   margin-bottom: 1.3rem;
   border: 1px solid #ddd;
   border-radius: 6px;
   outline: none;
 }
 .form input:focus{
   box-shadow: 0 1px 0 rgba(0,0,0,0.2);
 }
.form a{
  font-size: 16px;
  color: #009579;
  text-decoration: none;
}
.form a:hover{
  text-decoration: underline;
}
.form input.button{
  color: #fff;
  background: #009579;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 1.7rem;
  cursor: pointer;
  transition: 0.4s;
}
.form input.button:hover{
  background: #006653;
}
.signup{
  font-size: 17px;
  text-align: center;
}
.signup label{
  color: #009579;
  cursor: pointer;
}
.signup label:hover{
  text-decoration: underline;
}

  </style>