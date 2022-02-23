<template>


  <div >


    <Header></Header>
    <modal name="my-modal">
      <div class="modal-content">
     <div class="team-single-area">
        <div class="container">
            <div class="team-content-top_1">
                <div class="row">
                    <div class="col-lg-5 left-info">
                        <div class="thumb">
                            <img src="assets/img/team/1.jpg" alt="Thumb">
                        </div>
                    </div>
                    <div class="col-lg-7 ">
                        <h4>Lucas Ethan</h4>
                        <h6>Marketing Expert</h6>
                        <p class="p1">description</p>

                    </div>
                </div>
            </div>

        </div>
    </div>


      </div>
    </modal>
    <modal name="my-modal_1">
      <div class="modal-content">
     <div class="team-single-area">
        <div class="container">
            <div class="team-content-top_1">
                <div class="row">
                    <div class="col-lg-5 left-info">
                        <div class="thumb">
                            <img src="assets/img/team/2.jpg" alt="Thumb">
                        </div>
                    </div>
                    <div class="col-lg-7 ">
                        <h4>Lucas Ethan</h4>
                        <h6>Marketing Expert</h6>
                        <p class="p1">description</p>

                    </div>
                </div>
            </div>

        </div>
    </div>


      </div>
    </modal>
    <modal name="my-modal_2">
      <div class="modal-content">
     <div class="team-single-area">
        <div class="container">
            <div class="team-content-top_1">
                <div class="row">
                    <div class="col-lg-5 left-info">
                        <div class="thumb">
                            <img src="assets/img/team/3.jpg" alt="Thumb">
                        </div>
                    </div>
                    <div class="col-lg-7 ">
                        <h4>Lucas Ethan</h4>
                        <h6>Marketing Expert</h6>
                        <p class="p1">description</p>

                    </div>
                </div>
            </div>

        </div>
    </div>


      </div>
    </modal>
    <div
      class="breadcrumb-area text-center shadow dark text-light bg-cover"
      style="background-image: url(assets/img/banner/10.jpg)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>About Us</h1>
            <ul class="breadcrumb">
              <li><NuxtLink to="/"><i class="fa fa-home"></i> Home</NuxtLink></li>
              <li class="active">About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Start About
    ============================================= -->
    <div class="about-us-area default-padding bg-gray">
      <div class="container">
        <div class="about-items">
          <div class="row align-center">
            <div class="col-lg-6">
              <div class="thumb">
                <img src="assets/img/about/5.jpg" alt="Thumb" />

              </div>
            </div>
            <div class="col-lg-6 info">
              <h4>Established in 2000</h4>
              <p>
                Hingurana Group is one of the rapidly expanding corporates in
                Sri Lanka with a portfolio footprint that spans over 10+
                verticals of the Sri Lankan economy and a growing workforce of
                800+. Established by the founder Mr. Lakshman Wasantha Perera
                (LLB) with the vision to manufacture and take Sri Lankan
                products and services to both the local and global markets and
                in turn, assist Sri Lanka in its journey to develop as a leading
                economy at the regional and global stage.
              </p>

              <div class="author">

                <div class="intro">
                  <h5>Mr. Lakshman Wasantha Perera (LLB)</h5>
                  <span>Chairman & Founder Hingurana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-area default-padding-1 bottom-less">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="site-heading text-center">
              <h2>Managment Team</h2>

              <div class="devider"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <div class="team-items text-center">
          <div class="row">
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="thumb">
                <button @click="$modal.show('my-modal')"><img src="assets/img/team/1.jpg" alt="Thumb" /></button>

                  <div class="social">
                    <a href="#" class="share-icon facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="share-icon twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="share-icon instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class="share">
                    <i class="fa fa-share-alt"></i>
                  </div>
                </div>
                <div class="info">
                  <div class="content">
                   <h4> <button @click="$modal.show('my-modal')">Lucas Ethan</button></h4>
                    <span>Markteting Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="thumb">
                <button @click="$modal.show('my-modal_1')">  <img src="assets/img/team/2.jpg" alt="Thumb" /></button>

                  <div class="social">
                    <a href="#" class="share-icon facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="share-icon twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="share-icon instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class="share">
                    <i class="fa fa-share-alt"></i>
                  </div>
                </div>
                <div class="info">
                  <div class="content">
                   <h4> <button @click="$modal.show('my-modal_1')">Munia Anchor</button></h4>

                    <span>Assistant Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->

            <div class="single-item col-lg-4 col-md-6">
              <div class="item">
                <div class="thumb">
                <button @click="$modal.show('my-modal_2')"><img src="assets/img/team/3.jpg" alt="Thumb" /></button>


                  <div class="social">
                    <a href="#" class="share-icon facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="share-icon twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="share-icon instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div class="share">
                    <i class="fa fa-share-alt"></i>
                  </div>
                </div>
                <div class="info">
                  <div class="content">
                  <h4> <button @click="$modal.show('my-modal_2')">Ahel Natasha</button></h4>

                    <span>Executive Officer</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>


</template>

<script>
export default {
  head(){
  return {
    title:"Hingurana-About"
  }
  }
}

</script>
<style>
.modal-content {
  padding-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;


}
</style>
