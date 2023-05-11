<template>
<!-- 
<div>
  <button @click="showModal = true" class="btn btn-primary">{{ showProfile ? 'Hide Profile' : 'View Profile' }}</button>
  <div class="modal" tabindex="-1" role="dialog" v-show="showModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ user.name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showModal = false">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Height:</strong> {{ user.height }} cm</p>
          <p><strong>Weight:</strong> {{ user.weight }} kg</p>
          <p><strong>Age:</strong> {{ user.age }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="showModal = false">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showProfile && !user" class="mt-3">Loading...</div>
</div> -->


  <div>
  <button @click="showProfile = !showProfile" class="btn btn-primary">{{ showProfile ? 'Hide Profile' : 'View Profile' }}</button>
  <div v-if="showProfile && user" class="card mt-3">
    <div class="card-body">
      
      <p class="card-text">Name: {{ user.name }}</p>
      <p class="card-text">Email: {{ user.email }}</p>
      <p class="card-text">Height: {{ user.height }} cm</p>
      <p class="card-text">Weight: {{ user.weight }} kg</p>
      <p class="card-text">Age: {{ user.age }}</p>
    </div>
  </div>
  <div v-else-if="showProfile && !user" class="mt-3">Loading...</div>
</div>


<br>

<!-- <div>
  <input type="text" v-model="searchTerm" placeholder="Search food by name" @input="filterData">
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <ul v-if="filteredData.length > 0">
    <li v-for="item in filteredData" :key="item.id" @click="selectedItem = item">
      <h3>{{ item.Food }}</h3>
      <p>Measure: {{ item.Measure }}</p>
      <p>Grams: {{ item.Grams }}</p>
      <p>Calories: {{ item.Calories }}</p>
      <p>Protein: {{ item.Protein }}</p>
      <p>Fat: {{ item.Fat }}</p>
      <p>Saturated Fat: {{ item.Saturated_Fat }}</p>
      <p>Fiber: {{ item.Fiber }}</p>
      <p>Carbs: {{ item.Carbs }}</p>
      <p>Category: {{ item.Category }}</p>
    </li>
  </ul>
  <div v-if="selectedItem">
    <h3>{{ selectedItem.Food }}</h3>
    <p>Measure: {{ selectedItem.Measure }}</p>
    <p>Grams: {{ selectedItem.Grams }}</p>
    <p>Calories: {{ selectedItem.Calories }}</p>
    <p>Protein: {{ selectedItem.Protein }}</p>
    <p>Fat: {{ selectedItem.Fat }}</p>
    <p>Saturated Fat: {{ selectedItem.Saturated_Fat }}</p>
    <p>Fiber: {{ selectedItem.Fiber }}</p>
    <p>Carbs: {{ selectedItem.Carbs }}</p>
    <p>Category: {{ selectedItem.Category }}</p>
  </div>
</div> -->
<div>
      <input type="text" v-model="searchTerm" placeholder="Search food by name" @input="filterData">
      <div v-if="isLoading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <table v-if="showData">
        <thead>
          <tr>
            <th>Food</th>
            <th>Measure</th>
            <th>Grams</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Saturated Fat</th>
            <th>Fiber</th>
            <th>Carbs</th>
            <th>Category</th>
            <th>Add meal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredData" :key="item.id" @click="selectedItem = item">
            <td>{{ item.Food }}</td>
            <td>{{ item.Measure }}</td>
            <td>{{ item.Grams }}</td>
            <td>{{ item.Calories }}</td>
            <td>{{ item.Protein }}</td>
            <td>{{ item.Fat }}</td>
            <td>{{ item.Saturated_Fat }}</td>
            <td>{{ item.Fiber }}</td>
            <td>{{ item.Carbs }}</td>
            <td>{{ item.Category }}</td>
            <td>
            <button class="b1" @click="addMeal(item, 'Breakfast')">Breakfast</button>
            <button class="b1" @click="addMeal(item, 'Lunch')">Lunch</button>
            <button class="b1" @click="addMeal(item, 'Dinner')">Dinner</button>
          </td>
          </tr>
        </tbody>
      </table>
      <div v-if="selectedItem">
        <h3>{{ selectedItem.Food }}</h3>
        <p>Measure: {{ selectedItem.Measure }}</p>
        <p>Grams: {{ selectedItem.Grams }}</p>
        <p>Calories: {{ selectedItem.Calories }}</p>
        <p>Protein: {{ selectedItem.Protein }}</p>
        <p>Fat: {{ selectedItem.Fat }}</p>
        <p>Saturated Fat: {{ selectedItem.Saturated_Fat }}</p>
        <p>Fiber: {{ selectedItem.Fiber }}</p>
        <p>Carbs: {{ selectedItem.Carbs }}</p>
        <p>Category: {{ selectedItem.Category }}</p>
      </div>
    </div>

<!-- 
  <div>
    <button @click="showPasswordModal = true">Change Password</button>
    <modal-view v-if="showPasswordModal"><br><br>
      <form @submit.prevent="changePassword">
        <input type="password" v-model="password" placeholder="New Password" required><br><br>
        <input type="password" v-model="confirmPassword" placeholder="Confirm New Password" required><br><br>
        <button type="submit">Save</button>&nbsp;&nbsp;
        <button @click="showPasswordModal = false">Cancel</button>
      </form>
    </modal-view>
    <br><br>
    <button @click="logout">Logout</button>
  </div> -->

  <div>
    <button class="btn btn-primary" @click="showPasswordModal = true">Change Password</button>
    <modal-view v-if="showPasswordModal"><br><br>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="password">New Password:</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="New Password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm New Password:</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm New Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary" @click="showPasswordModal = false">Cancel</button>
      </form>
    </modal-view>
    <br><br>
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>

  </template>
  
 <script>

  import axios from "axios";
  import ModalView from './ViewProfile.vue';


  export default {
    name: "ViewProfile",
    data() {
      return {
        
    user: '',
    showProfile: false,
    showPasswordModal: false,
    password: '',
    confirmPassword: '',

    data: [],
       

      searchTerm: "",
      isLoading: false,
      error: null,
      selectedItem: null,

      };
    }   ,  components: {
    ModalView
  },
    
  computed: {
    filteredData() {
      if (this.searchTerm) {
        return this.data.filter(item =>
          item.Food.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return [];
      }
    },
    showData() {
      return this.searchTerm && this.filteredData.length > 0;
    }
  },
    async mounted() {
    const token = localStorage.getItem("token"); // get token from localStorage
    console.log(token,"token");
    try {
      const response = await axios.get("http://10.8.10.240:8000/profile/", {
        headers: {
          Authorization: `Bearer ${token}`, // include token in request headers
        },
      });
      console.log(response,"response");
      this.user = response.data;
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async logout() {
      const token = localStorage.getItem("token"); // get token from localStorage
      try {
        const response = await axios.post(
          "http://10.8.10.240:8000/logout/",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // include token in request headers
            },
          }
        );
        if (response.status === 200) {
            this.$router.push('/login')
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getData() {
      this.isLoading = true;
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: this.searchTerm,
          },
        };
        const response = await axios.get(
          "http://10.8.10.240:8000/dietlist/search/",
          config
        );
        this.data = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    filterData() {
      this.getData();
    },
    selectItem(item) {
      this.selectedItem = item;
    },
        
        async changePassword() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post('http://10.8.10.240:8000/changepassword/', {
          password: this.password,
          password1: this.confirmPassword,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data);
        this.showPasswordModal = false;
        alert("Your password is changed successfully")
      } catch (error) {
        console.error(error.response.data);
        alert("Please check your password again")
      }
    }, 
      }
    }
 

  </script>
  

  <style scoped>


.table-container {
  margin: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #ddd;
}

.b1{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
</style>
