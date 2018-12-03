<template>
    <div id="app">
        <img src="./assets/logo.png">
        <p class="title">The Christmas todo list</p>
        <TodoList/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/TodoList.vue";

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #b3000c;
  font-family: Karla, sans-serif;
  font-size: 16px;
  margin: 0;
}

::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: #b4c7d0;
  border: 3px solid transparent;
  border-radius: 5px;
}

::-webkit-scrollbar-track-piece {
  background: 0 0;
}

#app {
  max-width: 510px;
  margin: 50px auto;
  padding: 0 10px;
}

img {
  display: block;
  margin: 0 auto 15px auto;
}

p.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
