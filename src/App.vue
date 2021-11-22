<template>
  <v-app>
    <header>
      <Toolbar />
    </header>

    <v-main>
      <Main />
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>

    <div class="alert">
      <v-alert
        dismissible
        border="left"
        elevation="5"
        colored-border
        icon="fas fa-brain"
        class="mb-0 pt-4"
      >
        <p>
          Projeto do
          <a
            href="https://www.udemy.com/course/sass-e-scss-do-basico-ao-avancado-projetos"
            >curso</a
          >
          adaptado por Isaque da C. Delfino para o Vue.js
        </p>
        <p>
          Meu
          <a
            href="https://www.linkedin.com/in/isaque-da-costa-delfino-063824168/"
            >linkedin</a
          >. Meu <a href="https://github.com/isaqueback">github</a>
        </p>
      </v-alert>
    </div>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  components: { Toolbar, Main, Footer },
};
</script>

<style lang="sass">
@import './src/assets/sass/variables'
@import './src/assets/sass/utilities'

@include reset

.v-application
  overflow: hidden

.container
  max-width: 100% !important

.alert
  width: 100%
  position: fixed
  bottom: 0px

  .v-alert
    background-color: #EEEEEE !important
    p
      text-align: center
      font-size: 1rem
      @include mobile
        font-size: 1.2rem

  .v-alert__wrapper
    height: 45px
    padding-top: 10px
    @include mobile
      height: 110px
      padding-top: 15px

.v-icon
  margin: auto
</style>