<template>
    <!-- slide -->
      <div>
        <vueper-slides lazy lazy-load-on-drag  :slide-ratio="1 / 1.5" autoplay :slide-content-outside="contentPosition" >
        <vueper-slide 
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.img"/>
        </vueper-slides>
      </div>
    <!-- slide -->
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
   	data(){
		  return {
        slides: [{
                "no": "1",
                "name": "TrySail",
                "img": "https://trysail.jp/s3/skiyaki/uploads/ckeditor/pictures/258929/content_TrySail%E3%83%90%E3%83%8A%E3%83%BC.png"
            
            },
              {
                "no": "2",
                "name": "Momo",
                "img": "https://trysail.jp/s3/skiyaki/uploads/link/image/25756/%E3%83%98%E3%82%9A%E3%83%BC%E3%82%B7%E3%82%99%E7%94%A8_Agapanthus.jpg"
            
            },
              {
                "no": "3",
                "name": "Shiina",
                "img": "https://trysail.jp/s3/skiyaki/uploads/ckeditor/pictures/265470/content_protpoint_tsujo.jpg"
        }]
      }
    }
}
</script>

<style>
.vueperslides__bullet--active {
color: #e6e6e6;

}
</style>
