<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Barber_center</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/" style="color: black;"
              >║ Inicio ║</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/cita" style="color: black;"
              >║ Citas ║</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/agregar"
              >║ Agregación de empleado ║</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">║ Ver barberos ║</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>