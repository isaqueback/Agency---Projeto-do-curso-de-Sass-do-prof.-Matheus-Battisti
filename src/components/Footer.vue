<template>
  <v-container class="footer-container">
    <v-row class="footer-row">
      <v-col :cols="sm ? '12' : '7'">
        <v-row class="footer-desc-container">
          <h3 class="footer-title">Agency</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            asperiores nobis iusto, natus dolores voluptates illo dignissimos id
            ab ipsam debitis dolor eaque laboriosam quaerat nam obcaecati
            cupiditate blanditiis magnam!
          </p>
        </v-row>
        <v-row class="footer-copy-right-container" v-if="!(xs || sm)">
          <p>&copy; 2021 Agency</p>
          <p>A melhor agência para seus projetos</p>
        </v-row>
      </v-col>
      <v-col :cols="xs || sm ? '12' : '5'" class="footer-links-container">
        <v-col class="footer-links-container-list">
          <p class="footer-title" @click="imprimir">Links</p>
          <ul>
            <li>
              <a href="#">Base de conhecimento</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Últimos Projetos</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </v-col>
        <v-col class="footer-links-container-list">
          <p class="footer-title">Links</p>
          <ul>
            <li>
              <a href="#">Base de conhecimento</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Últimos Projetos</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </v-col>
        <v-col class="footer-links-container-list">
          <p class="footer-title">Links</p>
          <ul>
            <li>
              <a href="#">Base de conhecimento</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Últimos Projetos</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </v-col>
      </v-col>
      <v-col>
        <v-row class="footer-copy-right-container" v-if="xs || sm">
          <p>&copy; 2021 Agency</p>
          <p>A melhor agência para seus projetos</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    xs() {
      return this.$vuetify.breakpoint.name == "xs";
    },
    sm() {
      return this.$vuetify.breakpoint.name == "sm";
    },
  },
  methods: {
    imprimir() {
      console.log(this.$vuetify.breakpoint);
    },
  },
};
</script>

<style lang="sass">
@import './src/assets/sass/variables'
@import './src/assets/sass/utilities'

.v-footer
  background-color: $footer-bg !important
  color: $text-color !important
  padding: 5rem 2rem !important

  .footer-container
    max-width: 1200px
    margin: 0 auto
    display: flex
    flex-wrap: wrap

    .footer-row
      @include mobile
        // max-width: 100%
        flex-flow: column nowrap
        align-items: center
        display: contents

    h3.footer-title
      margin-top: 0.69rem

    .footer-title
      color: white
      font-weight: bold
      margin-bottom: 1rem

  .footer-desc-container, .footer-links-container
    @include mobile
      width: 100%
      margin-bottom: 2rem
      text-align: center
      justify-content: center

    .footer-desc-container
      p
        width: 80%
        line-height: 1.3
        @include mobile
          width: 100%

  .footer-copy-right-container
    width: 100%
    margin-top: 5rem
    flex-direction: column
    @include mobile
      text-align: center

  .footer-links-container
    display: flex
    @include mobile
      flex-direction: column

    &-list
      padding: 0 1rem
      @include mobile
        padding: 1rem

      ul
        padding-left: 0px

        li
          margin-bottom: .5rem

          a
            color: $text-color
            transition: .5s

            &:hover
              color: white
</style>