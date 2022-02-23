<template>
  <div >
  <!-- End Preloade

      <div id="preloader">
        <div id="earna-preloader" class="earna-preloader">
            <div class="animation-preloader">
                <div class="spinner"></div>
                <div class="txt-loading">
                    <span data-text-preloader="H" class="letters-loading">
                        H
                    </span>
                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>

                    <span data-text-preloader="G" class="letters-loading">
                        G
                    </span>
                    <span data-text-preloader="U" class="letters-loading">
                        U
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="A" class="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="A" class="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="G" class="letters-loading">
                        G
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="O" class="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="U" class="letters-loading">
                        U
                    </span>
                    <span data-text-preloader="P" class="letters-loading">
                        P
                    </span>

                </div>
            </div>
            <div class="loader">
                <div class="row">
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 -->

    <!-- End Preloader -->

    <!-- Start Header Top
    ============================================= -->
    <div class="top-bar-area inc-pad bg-dark text-light">
      <div class="container-full">
        <div class="row align-center">
          <div class="col-lg-8 info">
            <ul>
              <li>
                <i class="fa fa-map-marker-alt"></i> No.296 Gala Junction,
                Kandy Road, Kiribathgoda
              </li>
              <li>
                <i class="fa fa-envelope-open"></i> info@hinguranagroup.com
              </li>
            </ul>
          </div>
          <div class="col-lg-4 text-right item-flex">
            <div class="info">
              <ul>

              </ul>
            </div>
            <div class="social">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Top -->

    <!-- Header
    ============================================= -->
    <header id="home">
      <!-- Start Navigation -->
      <nav
        class="navbar navbar-default inc-top-bar navbar-fixed navbar-transparent white bootsnav"
      >
        <div class="container-full">
          <!-- Start Atribute Navigation -->
          <div class="attr-nav">
            <div class="call">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="info">
                <span>Have any question?</span>
                <h5>
                  <a href="tel:+94 11 291 1934"
                    ><b class="color_Prg">+94 11 291 1934</b></a
                  >
                </h5>
              </div>
            </div>
          </div>
          <!-- End Atribute Navigation -->

          <!-- Start Header Navigation -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i class="fa fa-bars"></i>
            </button>
          <nuxt-link class="navbar-brand" to="/">
              <img
                src="assets/img/hingurana-logo.png"
                class="logo logo-display"
                alt="Logo"
              />
              <img
                src="assets/img/hingurana-logo.png"
                class="logo logo-scrolled"
                alt="Logo"
              />
            </nuxt-link>
          </div>
          <!-- End Header Navigation -->

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-center" data-in="#" data-out="#">
              <li>
                <router-link
                  to="/"
                  class="nav-link"

                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                   class="nav-link"


                  >About Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/company"
                   class="nav-link"

                  >Companies</router-link
                >
              </li>

              <li>
                <router-link
                  to="/career"
                   class="nav-link"


                  >Careers</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                   class="nav-link"


                  >Contact Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="#"
                   class="nav-link"
                  >Media</router-link
                >
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </nav>
      <!-- End Navigation -->
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
export default {};
</script>

<style>

a.router-link-active{
  color: red;
}


</style>
