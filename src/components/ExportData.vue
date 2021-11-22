<template>
  <div>
    <v-row class="mt-10 ml-4">
      <v-col cols="2">
        <v-btn color="blue-grey" class="white--text">
          Read from CSV
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn color="green" class="white--text">
          Export to CSV
          <v-icon right dark> mdi-download-circle </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn depressed color="error"> Clear All Data </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn depressed color="primary" @click="getDetail">
          Run function
        </v-btn>
      </v-col>
    </v-row>
    <div class="mt-10">
      <v-card outlined>
        <v-row>
          <v-card-title>Input data</v-card-title>
          <v-spacer></v-spacer>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search input"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </v-row>
        <v-data-table
          :headers="inputHeaders"
          :items="inputItem"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:[`item.opinion`]="{ item }">
            <v-text-field v-model="item.opinion"></v-text-field>
          </template>
          <template v-slot:[`item.price`]="{ item }">
            <v-simple-checkbox v-model="item.price"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.service`]="{ item }">
            <v-simple-checkbox v-model="item.service"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.safety`]="{ item }">
            <v-simple-checkbox v-model="item.safety"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.quality`]="{ item }">
            <v-simple-checkbox v-model="item.quality"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.delivery`]="{ item }">
            <v-simple-checkbox v-model="item.delivery"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.authenticity`]="{ item }">
            <v-simple-checkbox v-model="item.authenticity"></v-simple-checkbox>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:[`body.append`]>
            <v-btn @click="addRow">
              <v-icon right dark large> mdi-plus-circle-outline </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div class="mt-10">
      <v-card outlined>
        <v-row>
          <v-card-title>Result data</v-card-title>
          <v-spacer></v-spacer>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search result"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </v-row>
        <v-data-table
          :headers="resultHeaders"
          :items="resultItem"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      search: null,
      info: null,
      inputHeaders: [
        {
          text: "ID",
          value: "id",
          align: "center",
          width: "5%",
        },
        { text: "Opinion", value: "opinion", align: "center", width: "30%" },
        { text: "Price", value: "price", align: "center", width: "8%" },
        { text: "Service", value: "service", align: "center", width: "10%" },
        { text: "Safety", value: "safety", align: "center", width: "10%" },
        { text: "Quality", value: "quality", align: "center", width: "10%" },
        { text: "Delivery", value: "delivery", align: "center", width: "10%" },
        {
          text: "Authenticity",
          value: "authenticity",
          align: "center",
          width: "10%",
        },
        {
          text: "Action",
          value: "actions",
          align: "center",
          width: "7%",
        },
      ],
      inputItem: [
        {
          id: 0,
          opinion: null,
          price: false,
          service: false,
          safety: false,
          quality: false,
          delivery: false,
          authenticity: false,
        },
      ],
      resultHeaders: [
        {
          text: "ID",
          value: "id",
          align: "center",
          width: "5%",
        },
        { text: "Opinion", value: "opinion", align: "center", width: "35%" },
        { text: "Price", value: "price", align: "center", width: "10%" },
        { text: "Service", value: "service", align: "center", width: "10%" },
        { text: "Safety", value: "safety", align: "center", width: "10%" },
        { text: "Quality", value: "quality", align: "center", width: "10%" },
        { text: "Delivery", value: "delivery", align: "center", width: "10%" },
        {
          text: "Authenticity",
          value: "authenticity",
          align: "center",
          width: "10%",
        },
      ],
      resultItem: [],
    };
  },
  created() {
    // this.getDetail();
  },
  methods: {
    getDetail() {
      axios
        .get("http://localhost:800/api/public", {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((response) => console.log(response));
    },
    addRow() {
      this.inputItem.push({
        id: this.inputItem.length,
        opinion: null,
        price: false,
        service: false,
        safety: false,
        quality: false,
        delivery: false,
        authenticity: false,
      });
    },
    deleteItem() {
      this.inputItem = [];
    },
    sendData() {},
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
