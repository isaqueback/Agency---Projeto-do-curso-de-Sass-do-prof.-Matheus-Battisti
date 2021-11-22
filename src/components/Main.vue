<template>
  <v-container class="services-container">
    <v-row>
      <h2>O que fazemos</h2>
    </v-row>
    <v-row class="services-card-container">
      <v-row>
        <div class="services-card">
          <i class="fab fa-buffer"></i>
          <h3>Desenvolvimento full stack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
        <div class="services-card">
          <i class="fas fa-bolt"></i>
          <h3>Sites leves e rápidos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
        <div class="services-card">
          <i class="fas fa-cart-plus"></i>
          <h3>E-coomerces</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
      </v-row>
      <v-row>
        <div class="services-card">
          <i class="fas fa-chart-line"></i>
          <h3>SEO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
        <div class="services-card">
          <i class="fab fa-chess-pawn"></i>
          <h3>Estratégias de Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
        <div class="services-card">
          <i class="fas fa-cloud"></i>
          <h3>Hospedagem AWS/Azure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            exercitationem perspiciatis, aliquam in repellendus consectetur, eum
            dolorem non quae doloremque accusamus. Modi quidem dignissimos quod
            ut non exercitationem accusantium nostrum?
          </p>
        </div>
      </v-row>
    </v-row>
    <v-row>
      <a href="#" class="btn btn-primary btn-rounded">Veja todos os Serviços</a>
    </v-row>
    <v-row class="jobs-container">
      <v-row>
        <h2>Alguns de nossos trabalhos</h2>
      </v-row>
      <v-row class="jobs-list">
        <v-col class="first-job" id="job1">
          <div class="job-card-cover">
            <p class="job-card-title">Projeto 1</p>
            <p class="job-card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              expedita culpa animi quod eligendi vitae autem cum, quidem
              veritatis dignissimos quaerat doloremque blanditiis voluptas
              quibusdam, sunt nemo deleniti voluptatum tenetur.
            </p>
          </div>
        </v-col>
        <v-col class="other-jobs-container">
          <v-row class="job-card" id="job2">
            <div class="job-card-cover">
              <p class="job-card-title">Projeto 2</p>
              <p class="job-card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur voluptas assumenda eligendi alias vel fugit dolorum,
                tenetur doloremque ducimus eos deserunt sit at dolore error illo
                dignissimos aspernatur expedita atque.
              </p>
            </div>
          </v-row>
          <v-row class="job-card" id="job3">
            <div class="job-card-cover">
              <p class="job-card-title">Projeto 3</p>
              <p class="job-card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur voluptas assumenda eligendi alias vel fugit dolorum,
                tenetur doloremque ducimus eos deserunt sit at dolore error illo
                dignissimos aspernatur expedita atque.
              </p>
            </div>
          </v-row>
        </v-col>
        <v-col class="other-jobs-container">
          <v-row class="job-card" id="job4">
            <div class="job-card-cover">
              <p class="job-card-title">Projeto 4</p>
              <p class="job-card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur voluptas assumenda eligendi alias vel fugit dolorum,
                tenetur doloremque ducimus eos deserunt sit at dolore error illo
                dignissimos aspernatur expedita atque.
              </p>
            </div>
          </v-row>
          <v-row class="job-card" id="job5">
            <div class="job-card-cover">
              <p class="job-card-title">Projeto 5</p>
              <p class="job-card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur voluptas assumenda eligendi alias vel fugit dolorum,
                tenetur doloremque ducimus eos deserunt sit at dolore error illo
                dignissimos aspernatur expedita atque.
              </p>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import './src/assets/sass/variables'
@import './src/assets/sass/utilities'

.services-container
  text-align: center
  padding: 2rem
  margin-bottom: 2rem
  @include mobile
    padding: 2rem 0

  .row, .btn
    justify-content: center

  h2
    @extend %section-title

  .services-card-container
    padding: 2rem
    @include mobile
      padding: 2rem 0

    .services-card
      width: 30%
      margin: 1%
      padding: 2rem
      border: 1px solid #CCC
      transition: .3ss
      @include mobile
        width: 100%

      i
        color: $primary-color
        font-size: 4rem
        margin-top: 1rem
        margin-bottom: 1.5rem

      h3
        font-size: 1.5rem
        margin-bottom: 1rem

      p
        color: $text-color

      &:hover
        border: transparent
        box-shadow: 0 1px 10px #ccc

.jobs-container
  background-color: $secondary-bg
  padding: 3rem
  @include mobile
    padding: 2rem
    // width: 100vw

  h2
    @extend %section-title

  .jobs-list
    display: flex
    padding: 2rem 0
    @include mobile
      flex-direction: column

    .col
      padding: 0px

    .first-job
      height: 408px
      margin-right: 8px
      background-image: url('../assets/img/job1.jpg')
      cursor: pointer
      transition: .5s
      @extend %center-bg
      @extend %card-hover
      @include mobile
        height: 200px
        margin-bottom: 2rem

    .other-jobs-container
      display: flex
      flex-wrap: wrap
      height: 415px
      @include mobile
        width: 100%
        margin: 0
        margin-bottom: 3rem

      .row
        margin: 0px !important

      .job-card
        height: 200px
        cursor: pointer
        @extend %center-bg
        @extend %card-hover
        @include mobile
          margin-bottom: 2rem !important

      #job2
        background-image: url('../assets/img/job2.jpg')
        margin-right: 8px !important
        @include mobile
          margin-right: 0 !important

      #job3
        background-image: url('../assets/img/job3.jpg')
        margin-right: 8px !important
        @include mobile
          margin-right: 0 !important

      #job4
        background-image: url('../assets/img/job4.jpg')

      #job5
        background-image: url('../assets/img/job5.jpg')

    .job-card-cover
      width: 100%
      height: 100%
      padding-top: 1.75rem
      background-color: rgba(0, 0, 0, .6)
      border: 3px solid $primary-color
      display: flex
      flex-flow: column nowrap
      justify-content: center
      align-items: center

    .job-card-title
      text-align: center
      color: white
      font-size: 2.2rem
      transition: 0.5s
      font-weight: bold
      margin-bottom: 0px
      @include mobile
        font-size: 2rem

    .job-card-description
      text-align: center
      color: white
      padding: 1rem
      font-size: .9rem
      @include mobile
        font-size: .8rem
</style>