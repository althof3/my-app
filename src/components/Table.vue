<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>nama</th>
          <th>sdsa</th>
          <th>dsadas</th>
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
  // state: {
  //   persons: [],
  // },
  data() {
    return {
      persons: [],
    };
  },

  mounted: async () => {
    try {
      const req = await axios.get("https://reqres.in/api/users");
      const res = await req.data.data;
      // eslint-disable-next-line no-console
      console.log(res);
      this.data().persons = res;
    } catch (error) {
      alert(error);
    }
    // this.fetchUser();
  },
};
</script>
