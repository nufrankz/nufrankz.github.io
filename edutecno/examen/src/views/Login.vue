<template>
  <div id="login" class="d-flex align-items-center">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <h4>Login Usuarios</h4>
          <div
            v-if="alert.state"
            class="alert alert-danger fade show"
            role="alert"
          >
            <!-- Texto a definir cada vez que el estado de la alerta sea true. -->
            {{ alert.text }}
          </div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="12345678-9"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="abc123"
                v-model="pass"
              />
            </div>
            <div class="mb-3">
              <p>Ingrese sus credenciales de usuario.</p>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="login"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      pass: "",
      alert: {
        text: "",
        state: false,
        type: "",
      },
    };
  },
  name: "Login",
  methods: {
    ...mapActions(["setUserData"]),
    login() {
      console.log("email", this.username, "pass", this.pass);
      if (this.email != "" && this.pass != "") {
        axios.get("/api/login.json").then((res) => {
          console.log("api data", res.data);
          let user = res.data;
          user.pass = "abc123";
          if (user.username == this.username && user.pass == this.pass) {
            this.setUserData(user);
            this.$router.push("/dashboard");
          } else {
            this.alert.state = true;
            this.alert.text = "Login incorrecto, intente otra vez.";
          }
        });
      } else {
        // Login no fué validado por Firebase, se muestra Alert de Bootstrap.
        this.alert.state = true;
        this.alert.text = "Debe ingresar usuario y password.";
      }
    },
  },
};
</script>

<style>
#login {
  height: 90vh;
}
</style>
