<template>
  <div id="app">
    <!--layout size-->
    <div id="layout">
      <!-- slide -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://trysail.jp/s3/skiyaki/uploads/link/image/25756/%E3%83%98%E3%82%9A%E3%83%BC%E3%82%B7%E3%82%99%E7%94%A8_Agapanthus.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://trysail.jp/s3/skiyaki/uploads/link/image/25209/TrySail%E3%83%90%E3%83%8A%E3%83%BC.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://trysail.jp/s3/skiyaki/uploads/link/image/25756/%E3%83%98%E3%82%9A%E3%83%BC%E3%82%B7%E3%82%99%E7%94%A8_Agapanthus.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- slide -->

      <!-- body grid layout -->
      <div class="bodyGridLayout">
        <!-- body grid 8 x 4 -->
        <div class="row">
          <div class="col-sm-8" style="background:pink">
            <!-- Different page layout -->
            <!-- Different page layout-->
          </div>

          <div class="col-sm-4" style="background:aqua">
            <div class="topicWithLine">
              <p>Video</p>
            </div>
            <!-- To do youtube , blog list , list -->
            <!-- youtube  -->
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/15cEZ9lG0Us"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <!-- youtube  -->

            <!-- blog -->
            <!-- blog -->

            <!-- link -->
            <!-- link -->
            <!-- To do youtube , blog list , list -->
          </div>
        </div>
        <!-- body grid 8 x 4-->
      </div>
      <!-- body grid layout -->

      <!-- footer -->
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-sm-auto p">About This Site</div>
          <div class="col-sm-auto p">About account</div>
          <div class="col-sm-auto p">About payment</div>
          <div class="col-sm-auto p">Terms of service</div>
          <div class="col-sm-auto p">Privacy policy</div>
          <div class="col-sm-auto p">Display based on the Japanese Commercial Code</div>
        </div>
      </div>
      <!-- footer -->
    </div>
    <!-- layout size-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#layout {
  padding-left: 20%;
  padding-right: 20%;
}

.bodyGridLayout {
  padding: 1% 2%
}

.topicWithLine p {
  overflow: hidden;
  text-align: center;
}

.topicWithLine p:before,
.topicWithLine p:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.topicWithLine p:before {
  right: 0.5em;
  margin-left: -50%;
}

.topicWithLine p:after {
  left: 0.5em;
  margin-right: -50%;
}

@media only screen and (max-width: 600px) {
  .col-sm-auto {
    font-size: 10px;
  }
}
</style>
