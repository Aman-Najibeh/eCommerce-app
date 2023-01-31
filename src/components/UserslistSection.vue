<template>
  <!-- <section class="ma-16 pa-16">
        <v-container>
            <p>USER LIST</p>
        </v-container>
    </section> -->

  <section class="ma-16">
    <v-table>
      <thead>
        <tr class="bg-secondary" color="#FBDF07">
          <th class="text-center py-2">Id</th>
          <th class="text-left py-2">Image</th>
          <th class="text-left py-2">Name</th>
          <th class="text-left py-2">Age</th>
          <th class="text-left py-2">Gender</th>
          <th class="text-left py-2">Email</th>
          <th class="text-left py-2">BirthDate</th>
          <th class="text-left py-2">Phone</th>

          <!-- <th class="text-left py-2">
          thumbnail
        </th> -->
        </tr>
      </thead>

      <tbody>
        <tr class="bg-info" v-for="user in userlist" :key="user.id">
          <td>{{ user.id }}</td>
          <td><v-img :src="user.image"></v-img></td>
          <td>{{ user.username }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthDate }}</td>
          <td>{{ user.phone }}</td>
          <!-- <td>{{ product.category }}</td> -->
          <!-- <td ><v-icon class="ma-2" @click="EditProduct()" to="/EditProduct">mdi-circle-edit-outline</v-icon></td> -->
          <!-- <td><v-icon class="ma-2" @click="RemoveProduct(i)">mdi-delete</v-icon></td> -->
          <!-- <td>{{ product.thumbnail }}</td> -->

          <v-divider></v-divider>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userlist: [],
      loading: false,
    };
  },
  created() {
    this.loadUserList();
  },
  methods: {
    loadUserList() {
      this.loading = true;
      this.axios("https://dummyjson.com/users")
        //    .then(res => res.json())
        .then((res) => {
          (this.userlist = res.data.users), (this.loading = false);
        });
      console.log(this.userlist);
    },
  },
};
</script>
