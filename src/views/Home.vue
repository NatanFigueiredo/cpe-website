<template>
  <div class="home">

    <div id="carouselCPE" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid w-100" src="@/assets/Slide1.jpg" alt="Primeiro Slide">
            <div class="carousel-caption d-none d-md-block">
                <h5>Somos um cursinho pré univesitário que busca transformar em realidade o sonho de entrar na universidade</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid w-100" src="@/assets/Slide3.jpg" alt="Terceiro Slide">
            <div class="carousel-caption d-none d-md-block">
                <h5>São duas turmas (Vespertino e Noturno) de 60 estudantes cada por ano</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/Slide4.jpg" class="d-block img-fluid w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h5>Toda nossa equipe de professores e plantonistas é voluntária e dedicada com a causa do CPE</h5>
            </div>
          </div>    
          <div class="carousel-item">
            <img class="d-block img-fluid w-100" src="@/assets/Slide2.jpg" alt="Segundo Slide">
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

    <div class="divider-azul w-100"> </div>


      <div class="m-5 infoBanner d-flex flex-column justify-content-center align-items-center">
        <img src="@/assets/atena-camisa.png" alt="Figura da mascote do CPE, a coruja Atena" class="img-fluid">
        <div class="d-flex flex-column">
          <p class="h1 title">Olá, este é o site do CPE</p>
          <p class="h5 subtitle">Ainda estamos ajeitando nossa Home, mas fique a vontade para explorar as outras páginas</p>
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
    text-shadow: 2px 2px #EF7A20;
}

.subtitle {
    color: #12385B;
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
    border-bottom: 5px solid #EF7A20;
    /* text-shadow: 2px 2px #fdc41c; */
    width: max-content;
}

p.h5 {
    font-weight: bold;
    border: 1px solid #12385B;
    background-color: #12385B;
    color: white;
}

/*  */

.divider-azul {
  height: 10px;
  background-color:#12385B;
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
  color:white;
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

</style>