<template>
  <v-container id="main-banner">
    <v-row class="nav-container">
      <v-col cols="5">
        <a href="#" class="brand"> <i class="fas fa-brain"></i> Agency </a>
      </v-col>
      <v-col cols="7 nav">
        <nav>
          <ul class="nav-container-navbar">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#" class="btn btn-primary">Entrar</a>
            </li>
            <li>
              <a href="#" class="btn">Registrar</a>
            </li>
          </ul>
        </nav>
      </v-col>
      <v-col cols="7 burger">
        <i class="fas fa-bars"></i>
      </v-col>
    </v-row>
    <v-row class="title-container">
      <h2>Nós desenvolvemos</h2>
      <h1>Poderosas Experiências</h1>
      <a href="#" class="btn btn-primary btn-rounded">fazer orçamento</a>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import './src/assets/sass/variables'
@import './src/assets/sass/utilities'

#main-banner
  background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url('../assets/img/office.jpg')
  height: 85vh
  background-size: cover
  background-position: center
  // position: relative

  .nav-container
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 7rem
    padding: 1.5rem 2rem
    background-color: $black
    z-index: 10

    @include mobile
      padding: 0.3rem
      height: 6rem

    .brand
      color: $light-color
      font-size: 2rem
      @include main-hover
      @include mobile
        font-size: 1.7rem

    &-navbar
      display: flex
      align-items: center

      li
        margin: 5px 10px

        a
          color: $light-color
          @include main-hover

    .col
      display: flex
      align-items: center

      &-2
        justify-content: start

      &-10
        justify-content: end

    .nav
      justify-content: end
      @include mobile
        display: none

    .burger
      color: white
      justify-content: end
      font-size: 2rem
      display: none
      @include mobile
        display: flex

  .title-container
    color: $light-color
    display: flex
    flex-flow: column nowrap
    align-items: center
    justify-content: center
    height: 100%

    @include mobile
      text-align: center

    h1
      font-size: 4rem
      margin-top: 1rem
      @extend %title-text-shadow
      @include mobile
        font-size: 2.5rem

    h2
      font-size: 3rem
      @extend %title-text-shadow
      @include mobile
        font-size: 2rem
</style>