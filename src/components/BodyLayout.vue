<template>
  <!-- body grid layout -->
  <div class="bodyGridLayout">
    <!-- body grid 8 x 4 -->
    <div class="row">
      <!-- Different page layout -->
      <div class="col-sm-8" style="background:white">
        <!-- Image List -->
        <Gallery></Gallery>
        <!-- Image List -->
        <!-- Todo New List -->
        <News></News>
        <!-- Todo New List -->
      </div>
      <!-- Different page layout-->
      <div class="col-sm-4" style="background:white; padding:0% 2%">
        <div class="topicWithLine">
          <p>Video</p>
        </div>
        <!-- To do youtube , blog list , list -->
        <!-- youtube  -->
        <div class="row">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/15cEZ9lG0Us"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style=" padding: 3%"
          ></iframe>
        </div>
        <!-- youtube  -->
        <div class="topicWithLine">
          <p>Blog</p>
        </div>
        <div class="row" style="padding-top: 3%;">
          <a href="https://ameblo.jp/asakuramomoblog">
            <img src="../assets/images/momo/momo_blog_logo.jpg" width="100%" />
          </a>
        </div>
        <div class="row">
          <a href="https://ameblo.jp/amamiyasorablog">
            <img src="../assets/images/sora/sora_blog_logo.jpg" width="100%" />
          </a>
        </div>
        <div class="row">
          <a href="https://ameblo.jp/natsukawashiinablog">
            <img src="../assets/images/shiina/shiina_blog_logo.jpg" width="100%" />
          </a>
        </div>
        <div class="row" style="padding-top: 3%;">
          <a href="https://trysail.jp/contents/211898">
            <img src="../assets/images/trysail/trysail_3rd_album_link.jpg" width="100%" />
          </a>
        </div>
        <div class="row">
          <a href="https://trysail.jp/contents/211899">
            <img src="../assets/images/shiina/shiina_1st_album_link.jpg" width="100%" />
          </a>
        </div>
        <div class="row" style="padding-top: 3%;">
          <a href="http://try.secondshot.jp/">
            <img src="../assets/images/trysail/trysail_radio_link.jpg"  width="100%"/>
          </a>
        </div>
        <div class="row">
          <a href="http://www.joqr.co.jp/mss/">
            <img src="../assets/images/trysail/trysail_taking_box_link.jpg"  width="100%"/>
          </a>
        </div>
        <div class="row">2</div>
        <div class="row">3</div>

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
</template>

<script>
import Gallery from "./Gallery.vue";
import News from "./News.vue"

export default {
  components: { Gallery, News }
};
</script>