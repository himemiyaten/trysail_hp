<template>
  <div id="layout">
    <!-- layout from Slide -->
    <Slide>
    </Slide>
    <!-- layout from Slide -->
   <!-- layout from HelloWorld2 -->
    <HelloWorld2>
    </HelloWorld2>
    <!-- layout from HelloWorld2 -->
    <!-- layout from BodyLayout -->
      <BodyLayout>
     </BodyLayout>
    <!-- layout from BodyLayout -->
  </div>
</template>


<script>
  import Slide from './Slide.vue'
  import BodyLayout from './BodyLayout.vue';

export default {
    components : { Slide, BodyLayout, },
};
</script>

<style>
#layout {
  padding-left: 20%;
  padding-right: 20%;
}

</style>