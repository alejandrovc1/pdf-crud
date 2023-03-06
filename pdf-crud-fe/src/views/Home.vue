<template>
  <v-container>
    <v-alert text v-model="alert.show" :type="alert.type" dismissible>{{alert.message}}</v-alert>
    <v-row justify="center">
      <v-col class="text-center" md="2" sm="2">
        <v-btn @click="suForm=true">sign up</v-btn>
      </v-col>
      <v-col class="text-center" md="2" sm="2">
        <v-btn @click="suForm=false">sign in</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6" sm="6">
        <v-card v-if="suForm">
          <v-card-title>Sign Up</v-card-title>
          <v-card-text>
            <v-form class="ma-3" @submit.prevent="signup()" ref="signupForm">
              <v-text-field
                label="E-mail"
                prepend-icon="mdi-email"
                :rules="emailRules"
                v-model="user.email"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="user.password"
              ></v-text-field>
              <v-btn block class="primary mt-3" type="submit">sign up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-title>Sign In</v-card-title>
          <v-card-text>
            <v-form class="ma-3" @submit.prevent="signin()" ref="signinForm">
              <v-text-field
                label="E-mail"
                prepend-icon="mdi-email"
                :rules="emailRules"
                v-model="user.email"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="user.password"
              ></v-text-field>
              <v-btn block class="success mt-3" type="submit">sign in</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      alert: { show: false, message: "" },
      emailRules: [
        value => !!value || "E-mail is required",
        value => /.+@.+\..+/.test(value) || "E-mail must be valid"
      ],
      passwordRules: [
        value => !!value || "Password is required",
        value =>
          (value && value.length >= 2) ||
          "Password must be more than 2 characters"
      ],
      user: { email: "", password: "" },
      suForm: true
    }),
    methods: {
      async signup() {
        let valid = await this.$refs.signupForm.validate();
        if (valid.valid) {
          try {
            const res = await this.axios.post("/signup", this.user);
            sessionStorage.setItem("session", JSON.stringify(res.data));
              this.$router.push('/crud')
          } catch (error) {
            this.alert = {
              show: true,
              type: "error",
              message: error.response.data.message
            };
          }
        }
      },
      async signin() {
        let valid = await this.$refs.signinForm.validate();
        if (valid.valid) {
          try {
            const res = await this.axios.post("/signin", this.user);
            if (res.data.NotFound) {
              this.alert = {
                show: true,
                type: "error",
                message: res.data.message
              };
            } else {
              sessionStorage.setItem("session", JSON.stringify(res.data));
              this.$router.push('/crud')
            }
          } catch (error) {
            this.alert = {
              show: true,
              type: "error",
              message: error.response.data.message
            };
          }
        }
      }
    }
  };
</script>
