<template>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Search food by name" @input="filterData">
      <div v-if="isLoading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <table>
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
          <tr v-for="item in filteredData" :key="item.id" @click="selectedItem(item)">
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
              <button @click="addMeal(item, 'Breakfast')">Breakfast</button>
              <button @click="addMeal(item, 'Lunch')">Lunch</button>
              <button @click="addMeal(item, 'Dinner')">Dinner</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div v-if="selectedItem">
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
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from "axios";

export default {
  data() {
    return {
      data: [],
      searchTerm: "",
      filteredData: [],
      selectedItemData: null,
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async getData() {
      this.isLoading = true;
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://10.8.10.240:8000/dietlist/search/",
          config
        );
        this.data = response.data;
        this.filterData();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    filterData() {
      this.filteredData = this.data.filter(item =>
        item.Food.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    selectedItem(item) {
      this.selectedItemData = item;
    },

    async addMeal(item, meal) {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const data = {
          food_id:item.id,
          FoodName: item.Food,
          measure: item.Measure,
          grams: item.Grams,
          calories: item.Calories,
          protein: item.Protein,
          fat: item.Fat,
          saturated_fat: item.Saturated_Fat,
          fiber: item.Fiber,
          carbs: item.Carbs,
          category: item.Category,
          meal_type: meal,
        };
        const response = await axios.post(
          "http://10.8.10.240:8000/add_food_to_meal/",
          data,
          config
        );
        console.log(response.data);
      }
      
      catch (error) {
  if (error.message === "Request failed with status code 400") {
    this.error = "This food has already been added to your meal";
  } else {
    this.error = error.message;
  }
  console.log(this.error);
}

    },
  },
  mounted() {
    this.getData();
  },
};

</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #004d99;
  color: white;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
