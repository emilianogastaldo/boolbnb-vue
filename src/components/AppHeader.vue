<script>
import SearchForm from './SearchForm.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchForm
    },
}

</script>

<template>
    <header class="position-relative">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <div class="d-flex align-items-center">

                    <RouterLink to="/" class="home d-flex align-items-center gap-3">
                        <img src="../assets/img/bbb100.png" alt="">
                        <h2 class="me-2 d-none d-md-inline orange">BoolBnb</h2>
                    </RouterLink>
                    <!-- <RouterLink class="ms-3 home" :to="{ name: 'filter' }">
                        <p class="mb-0">Filtri</p>
                    </RouterLink> -->
                </div>
                <button class="navbar-toggler bg-orange" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <!-- <SearchForm /> -->
                    <ul class="navbar-nav text-end">
                        <li class="nav-item me-3 ms-2">
                            <a class="nav-link" href="http://localhost:8000/login">
                                <font-awesome-icon class="orange" icon="fa-solid fa-right-to-bracket" />
                                <span class="ms-2 orange">Accedi</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:8000/register">
                                <font-awesome-icon class="orange" icon="fa-regular fa-user" />
                                <span class="ms-2 orange">Registrati</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
header {
    height: 80px;
    z-index: 1;
}

img {
    height: 50px;
}

nav {
    background-color: #051E34;
    color: white;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.orange {
    color: #FF9900;
}

.bg-orange {
    background-color: #FF9900;
}

a {
    font-weight: 500;
    font-size: 1.1rem;
    color: white;
}

a:hover {
    color: white;
}

.home {
    text-decoration: none;
}

button {
    background-color: white;
}
</style>