<template>

<div class="bg-color">
<div class="containers">
  <!-- <input type="checkbox" id="check1"> -->
    <div class="registration form">
      <header class="register-header" >Register</header>
      <form action="#">
<input v-model="username" type="text" id="username" placeholder="Enter your name" required/>
<input v-model="email" type="email" id="email" placeholder="Enter your email" required/>        
<input v-model="password" type="password" id="password" placeholder="Create a password"  required/>
<input v-model="confirmpassword" type="password" id="confirmpassword" placeholder="Confirm your password" required/>
<input v-model="age" type="number" id="age" placeholder="Enter you age" required/>
<input v-model="height" type="number" id="height" placeholder="Enter you height(in cm)" required/>
<input v-model="weight" type="number" id="weight" placeholder="Enter you weight(in kg)" required/>

<button class="register-submit-btn" type="submit" v-on:click.prevent = "signup()">
        Register</button>
       

      </form>
      <div class="signup">
        <span class="signup">Already have an account?
          <router-link :to="{name: 'login'}">LogIn?</router-link>
         <!-- <label for="check1">Login</label> -->
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
        username: '',
        email: '',
        password: '',
        confirmpassword:'',
        age:'',
        height:'',
        weight:'',
      }
    },
    methods: {
      signup() {
        axios.post('http://10.8.10.240:8000/register/', {
          email: this.email,
          name: this.username,
          password: this.password,
          password1: this.confirmpassword,
          age: this.age,
          height: this.height,
          weight: this.weight,
    
        })
        .then(response => {
          console.log(response.data)
          this.$router.push('/login')
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
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #009579;
}
.containers{
  position: absolute;
  height: 95%;
  top: 50%;
  left: 50%;
  bottom: 50%;
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

.form header{
  margin: 1.01rem;
  font-size: 2rem;
  font-weight: bolder;
  text-align: center;

}
 .form input{
   height: 50px;
   margin: 5px;
   width: 90%;
   padding: 0 8px;
   font-size: 17px;
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

.register-submit-btn{
  background-color: #009579 ;
  border-radius: 10px;
  margin: 15px 0px;
  border:none;
  padding:  5px 15px;
  font-weight: bolder;
  border: 1px solid darkgray;
  color:white;
}
.register-submit-btn:hover{
  background-color: #064d40 ;
  
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
  margin-top: 1rem;
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