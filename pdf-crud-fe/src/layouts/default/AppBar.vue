<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-file-arrow-left-right-outline" />
      PDF CRUD
    </v-app-bar-title>
    <v-btn class="ml-auto" color="purple" text @click="SignOut()">SIGN OUT</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    SignOut() {
      sessionStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
