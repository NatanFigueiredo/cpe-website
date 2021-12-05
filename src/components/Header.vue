<template>
		<header>
			<nav class="navbar navbar-expand-lg navbar-light bg-originalColor" role="navigation">
				<div class="container">
					<a class="navbar-brand" href="/">
						<img src="../assets/logo-cpe.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
					</a>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item">
								<router-link class="nav-link" to="/"> <p class="text-originalColor">Início</p>  </router-link>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<p class="dropdown-toggle text-originalColor"> Quem Somos </p>
								</a> 
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<router-link class="dropdown-item" to="/sobre"> 
										<p class="p-dark">Sobre o CPE</p> 
									</router-link>
									<router-link class="dropdown-item" to="/equipe"> 
										<p class="p-dark">Equipe</p> 
									</router-link>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<p class="dropdown-toggle text-originalColor"> Aulas </p>
								</a> 
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<router-link class="dropdown-item" to="/aulas"> 
										<p class="p-dark">Aulas e Turmas</p> 
									</router-link>
									<router-link class="dropdown-item" to="/processo-seletivo"> 
										<p class="p-dark">Processo Seletivo de Alunos</p> 
									</router-link>
								</div>
							</li>

							

							<!-- <router-link class="nav-link" to="/ensino"> <p>Ensino</p> </router-link>
							<router-link class="nav-link" to="/processo-seletivo"> <p> Processo Seletivo </p> </router-link>
							<router-link class="nav-link" to="/contato"> <p> Contato </p> </router-link> -->
						</ul>
					</div>
				</div>

			</nav>

		</header>
    
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

.p-dark{
	color: black;
}

header * p {
	color: white;
	margin: 0
}

.navbar-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-nav a.router-link-exact-active {
  color: #42b983;
}

</style>