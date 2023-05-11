<template>
   <div class="bg-color">
  <div>
   
    <h1>Activity Level</h1>
    <form @submit.prevent="submit">
      
        <label for="calories_burned">Calories Burned:</label>
        <input v-model="calories_burned" type="number" id="calories_burned" required>
        <br><br>
     
        <label for="steps_taken">Steps Taken:</label>
        <input v-model="steps_taken" type="number" id="steps_taken" required>
        <br><br>
      
        <label for="workout_duration">Workout Duration:</label>
        <input v-model="workout_duration" type="number" id="workout_duration" required>
        <br><br>
      <button type="submit">Submit</button>
    </form>

    <div v-if="responseData">
      <h4>{{ `Your Activity level is: ${responseData.activity_level}` }}</h4>
    </div>
  
     
    <div v-if="isSubmitted" class="bmi-button">
      <span>Click here to CALCULATE the <router-link :to="{name: 'bmi'}">BMI?</router-link></span>
    </div>

  </div>
<!-- 
  <div>
    <h1>BMI Calculator</h1>
    <form @submit.prevent="calculateBMI">
      <label for="height">Height (cm): </label>
      <input type="number" v-model="height" id="height" required>
      <br><br>
      <label for="weight">Weight (kg): </label>
      <input type="number" v-model="weight" id="weight" required>
      <br><br>
      <button type="submit">Calculate BMI</button>
    </form>
    <div v-if="result">
      <h4>Your BMI is {{ result }}</h4>
    </div>
  </div> -->

  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      calories_burned:"",
      steps_taken:"",
      workout_duration:"",
      responseData:null
    }
  },
  computed: {
    isSubmitted() {
      return this.responseData !== null;
    },
  },
  methods: {
    submit() {
      axios.post('http://10.8.10.240:8000/activity-level/', {
        calories_burned: this.calories_burned,
        steps: this.steps_taken,
        workout_duration: this.workout_duration
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
          
        }
      })
      .then(response => {
        this.responseData = response.data;
      
        // this.$router.push('/bmi')
      })
      .catch(error => {
        console.log(error.response.data);
      });
    },
    // calculateBMI() {
    //     const bmi = this.calculateBMI()
        
    //     if (!bmi) {
    //       return
    //     }
        
    //     // Navigate to the route /results, passing the BMI as a query parameter
    //     this.$router.push({ path: '/results', query: { bmi: bmi } })
    //   }
  
    beforeRouteEnter(to, from, next)
   {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else { 
      next()
    }
  },

    // calculateBMI() {
    //   axios.post('http://10.8.10.240:8000/bmi/', {
    //     height: this.height,
    //     weight: this.weight,
    //   },{
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
          
    //     }
    //   }).then(response => {
    //     this.result = response.data.bmi;
    //   }).catch(error => {
    //     console.error(error);
    //   });
    // },
  }
};
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
  }
  .bg-color{
    display: flex;
    height: 100vh;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #151515;
  }
  .login-form{
    position: relative;
    width: 370px;
    height: auto;
    background: #1b1b1b;
    padding: 40px 35px 60px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: inset 0 0 1px #272727;
  }
  .text{
    font-size: 30px;
    color: #c7c7c7;
    font-weight: 600;
    letter-spacing: 2px;
  }
  form{
    margin-top: 40px;
  }
  form label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: #c7c7c7;
    text-align: left;
  }
  form input[type="number"]{
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 19px;
    color: #868686;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid #444;
    caret-color: #339933;
    background: linear-gradient(#333,#222);
  }
  input:focus{
    color: #339933;
    box-shadow: 0 0 5px rgba(0,255,0,.2),
                inset 0 0 5px rgba(0,255,0,.1);
    background: linear-gradient(#333933,#222922);
    animation: glow .8s ease-out infinite alternate;
  }
  @keyframes glow {
    0%{
      border-color: #339933;
      box-shadow: 0 0 5px rgba(0,255,0,.2),
                  inset 0 0 5px rgba(0,0,0,.1);
    }
    100%{
      border-color: #6f6;
      box-shadow: 0 0 20px rgba(0,255,0,.6),
                  inset 0 0 10px rgba(0,255,0,.4);
    }
  }
  button{
    margin-top: 30px;
    border-radius: 5px!important;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 19px;
    color: #868686;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid #444;
    background: linear-gradient(#333,#222);
  }

  .button:hover {
  color: #339933;
  border: 1px solid #339933;
  box-shadow: 0 0 5px rgba(0, 255, 0, .3),
              0 0 10px rgba(0, 255, 0, .2),
              0 0 15px rgba(0, 255, 0, .1),
              0 2px 0 black;
  transition: all 0.3s ease-in-out;
}
</style>






