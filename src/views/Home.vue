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

    <div class="content">
      
      <h1> Cursinho Popular EACH USP</h1>
      <h5> Transformando em realidade o sonho de entrar na universidade</h5>

    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="@/assets/atena-apostilas.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="@/assets/atena-apostilas.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="@/assets/atena-apostilas.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
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
  font-weight: bold;
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

</style>