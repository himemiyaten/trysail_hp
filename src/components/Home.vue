<template>
<div>
    <div id="layout">
      <!-- layout from Slide -->
      <Slide>
      </Slide>
      <!-- layout from Slide -->
      <!-- layout from BodyLayout -->
        <BodyLayout>
      </BodyLayout>
      <!-- layout from BodyLayout -->
    </div>
       <!-- footer -->
      <Footer>
      </Footer>
      <!-- footer -->
</div>
</template>

<script>
  import Slide from './Slide.vue'
  import BodyLayout from './BodyLayout.vue';
  import Footer from "./Footer.vue"

export default {
    components : { Slide, BodyLayout, Footer },
};
</script>

<style>
#layout {
  padding-left: 20%;
  padding-right: 20%;
}

</style>