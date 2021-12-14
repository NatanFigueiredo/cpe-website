<template>
  <div class="home bg-originalColor">

    <div id="carouselCPE" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid w-100" src="@/assets/Slide1.jpg" alt="Imagem de estudantes em uma sala de aula">
            <div class="carousel-caption d-none d-md-block">
                <h5>Somos um cursinho pré univesitário que busca transformar em realidade o sonho de entrar na universidade</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid w-100" src="@/assets/Slide3.jpg" alt="Imagem do quadro de aulas e horarios do cursinho">
            <div class="carousel-caption d-none d-md-block">
                <h5>São duas turmas (Vespertino e Noturno) de 60 estudantes cada por ano</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/Slide4.jpg" class="d-block img-fluid w-100" alt="Imagem da equipe de professores sorrindo em frente a uma lousa">
            <div class="carousel-caption d-none d-md-block">
                <h5>Toda nossa equipe de professores e plantonistas é voluntária e dedicada com a causa do CPE</h5>
            </div>
          </div>    
          <div class="carousel-item">
            <img class="d-block img-fluid w-100" src="@/assets/Slide2.jpg" alt="Imagem da equipe de voluntários vestindo camisas do cursinho e sorrindo próximo a uma placa escrita 'USP Leste'">
            <div class="carousel-caption d-none d-md-block">
                <h5>Nossa equipe administrativa é composta por alunos da USP que acreditam na educação popular</h5>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselCPE" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a class="carousel-control-next" href="#carouselCPE" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="sr-only">Próximo</span>
        </a>
    </div>

    <!-- <img src="../assets/banner.jpg" class="banner img-fluid w-100" alt="Pessoas vestibulandas numa sala de aula"> -->

    <div class="divider-azul bgc-originalColor w-100"/>


    <div class="p-5" tabindex="0">
      <div class="infoBanner d-flex flex-column justify-content-center align-items-center bgc-originalColor">
        <img src="@/assets/atena-camisa.png" alt="Figura da mascote do CPE, a coruja Atena" class="img-fluid">
        <div class="d-flex flex-column">
          <p class="h1 title title-originalColor text-originalColor sh-originalColor">Olá, este é o site do CPE</p>
          <p class="h5 subtitle text-originalColor">Ainda estamos ajeitando nossa Home, mas fique a vontade para explorar as outras páginas</p>
        </div>
      </div>
    </div>

    

    <!-- Acompanhe a gente -->
    <div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
}
</script>

<style>

/* Labels e titulos */

.title {
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
}

.subtitle {
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
    /* text-shadow: 2px 2px #fdc41c; */
    width: max-content;
}

p.h5 {
    font-weight: bold;
}

/* Visual Components */

.divider-azul {
  height: 10px;
}

.card {
  border-width: 0;
}
.card img {
  border-radius: 50%;
}

.content {
  /* border: 1px solid red; */
  padding: 2% 0
}

.content h1 {
  max-width: auto;
  border-bottom: 3px solid #EF7A20; 
  font-family: 'Spartan', sans-serif;
}

.carousel-caption > h5
{
    width: 50%;
    height: auto;
    margin: auto;
    text-shadow: 2px 2px #EF7A20;
    color: white;
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
}

.infoBanner {
  border: 1px solid #12385B;
  background-color: #12385B;
  border-radius: 25px;
  max-height: auto;
}

.infoBanner > * > .h1{
  color:white;
}

.infoBanner > * > .subtitle{
  margin: 10px;
  background-color: unset;
  border: unset;
  display:block;
  width: auto;
}

.infoBanner > img {
  max-width: auto;
  height: 250px;
}

@media (max-width: 576px) { 
  .infoBanner > * > .h1{
    font-size: 25px;
  }
}

/* Cores Originais */

.text-originalColor{
    color: white !important;
}

.bg-originalColor {
  background-color: #3D76BA ;
}

.bgc-originalColor {
  background-color: #12385B !important;
}

.sh-originalColor {
  text-shadow: 2px 2px #EF7A20;
}

.title-originalColor {
  color: white;
}

.subtitle-originalColor {
  color: white;
  border-bottom: 5px solid #EF7A20;
}

.hl-originalColor {
  background-color: #12385B;
  color: white;
}

/* Cores Alternativas */

.text-alternativeColor{
    color: black !important;
}

.bg-alternativeColor {
  background-color: white ;
}

.bgc-alternativeColor {
  background-color: #EF7A20 !important;
}

.sh-alternativeColor {
  text-shadow: 2px 2px white;
}

.title-alternativeColor {
  color: black;
}

.subtitle-alternativeColor {
  color:  #12385B;
  border-bottom: 5px solid #EF7A20;
}

.hl-alternativeColor {
  background-color: #12385B;
  color: white;
}


</style>