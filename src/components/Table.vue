<template>
  <div>
    <table style="margin: auto">
      <thead>
        <tr>
          <th>email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody v-for="person in persons" :key="person.id">
        <tr>
          <td>{{ person.email }}</td>
          <td>{{ person.first_name }}</td>
          <td>{{ person.last_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "table",
  data() {
    return {
      persons: [],
    };
  },
  methods: {
    async fetchUser() {
      try {
        const req = await axios.get("https://reqres.in/api/users");
        const res = await req.data.data;
        this.persons = res;
      } catch (error) {
        alert(error);
      }
    },
  },

  mounted() {
    this.fetchUser();
  },
};
</script>
