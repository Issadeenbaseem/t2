<template>
  <div class="torch-red">
     <!-- Start Preloader
    ============================================= -->
    <div id="preloader">
        <div id="earna-preloader" class="earna-preloader">
            <div class="animation-preloader">
                <div class="spinner"></div>
                <div class="txt-loading">
                    <span data-text-preloader="E" class="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="A" class="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="A" class="letters-loading">
                        A
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
    <!-- End Preloader -->

    <!-- Start Header Top
    ============================================= -->
    <div class="top-bar-area inc-pad bg-dark text-light">
        <div class="container-full">
            <div class="row align-center">
                <div class="col-lg-6 info">
                    <ul>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>  No.296 Gala Junction, Kandy Road, Kiribathgoda
                        </li>
                        <li>
                            <i class="fas fa-envelope-open"></i> Info@gmail.com
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 text-right item-flex">
                    <div class="info">
                        <ul>
                            <li>
                                <i class="fas fa-clock"></i> Office Hours: 8:00 AM – 7:45 PM
                            </li>
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
        <nav class="navbar navbar-default inc-top-bar navbar-fixed navbar-transparent white bootsnav">

            <div class="container-full">

                <!-- Start Atribute Navigation -->
                <div class="attr-nav">
                    <div class="call">
                        <div class="icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="info">
                            <span>Have any question?</span>
                           <h5>                           <a href="tel:+94 11 291 1934"><b class="color_Prg">(+94)11 291 1934</b></a>
</h5>
                        </div>
                    </div>
                </div>
                <!-- End Atribute Navigation -->

                <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/logo-light.png" class="logo logo-display" alt="Logo">
                        <img src="assets/img/logo-red.png" class="logo logo-scrolled" alt="Logo">
                    </a>
                </div>
                <!-- End Header Navigation -->

              <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-center" data-in="#" data-out="#">
                        <li >
                            <n-link to="/"  :prefetch="false" class="dropdown-toggle active" data-toggle="dropdown" >Home</n-link>

                        </li>
                        <li>
                            <NuxtLink to="about"  :prefetch="false" class="dropdown-toggle " data-toggle="dropdown">About Us</NuxtLink>

                        </li>
                        <li >
                            <NuxtLink to="company"  :prefetch="false" class="dropdown-toggle " data-toggle="dropdown" >Companies</NuxtLink>

                        </li>

                        <li >
                            <NuxtLink to="career"  :prefetch="false"  class="dropdown-toggle" data-toggle="dropdown" >Careers</NuxtLink>

                        </li>
                        <li >
                            <NuxtLink to="/contact"  :prefetch="false" class="dropdown-toggle" data-toggle="dropdown" >Contact Us</NuxtLink>

                        </li>
                        <li >
                            <NuxtLink to="media"   :prefetch="false" class="dropdown-toggle" data-toggle="dropdown" >Media</NuxtLink>

                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>

        </nav>
        <!-- End Navigation -->

    </header>
    <!-- End Header -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
