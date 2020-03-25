<template>
  <div id="app">

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
