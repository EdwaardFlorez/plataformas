<template>
  <div class="hello">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <h1>{{ msg }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Check</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in people" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.last_name }}</td>
          <td>{{ person.sn }}</td>
          <td v-if="person.check"><i class="fas fa-check"></i></td>
          <td v-if="!person.check"><i class="fas fa-times"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const people = [
  {
    id: 1,
    name: "Mark",
    last_name: "Otto",
    sn: "mdo",
    check: true,
  },
  {
    id: 2,
    name: "Jacob",
    last_name: "Thornton",
    sn: "fat",
    check: false,
  },
  {
    id: 3,
    name: "Larry",
    last_name: "the brid",
    sn: "ftwitter",
    check: false,
  },
];

export default {
  data() {
    return {
      people,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
