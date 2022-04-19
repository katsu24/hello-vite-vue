<template>
  <div class="description">
    <h1>Vite + Vue + TypeScriptサンプル</h1>
  </div>
  <header>
    <nav>
      <ul>
        <li :class="{ selected: currentPage == 'home' }">
          <a href="#/">Home</a>
        </li>
        <li :class="{ selected: currentPage == 'about'}">
          <a href="#/about">About</a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="pageArea">
    <routerView />
  </div>

  <div class="resetCount">
    <button @click="reset">すべてのカウントをリセット</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRootStore } from './store';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useRootStore()
    const reset = () => {
      store.dispatch('reset')
    }

    const route = useRoute()
    const currentPage = computed(() => route.name)

    return { reset, currentPage }
  }
})
</script>


<style lang="scss">
$textColor: #2c3e50;
$primary: #61b3e6;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
  padding: 30px 10%;
}
h1,
h2 {
  margin: 0;
  padding: 10px;
}
button {
  border: 2px solid $textColor;
  color: $textColor;
  background-color: #fff;
  border-radius: 3px;
  font-weight: bold;
}
header {
  margin: 0;
  padding: 20px 0 2px 0;
}
nav {
  ul {
    margin: 0;
    border-bottom: 1px solid $primary;
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    li {
      width: 120px;
      height: 24px;
      font-size: 16px;
      font-weight: bold;
      &.selected {
        background-color: $primary;
        color: #fff;
      }
      a {
        color: inherit;
      }
    }
  }
}
.description {
  padding: 10px 0;
  text-align: left;
}
.pageArea {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  background-color: #e2f0f4;
  padding: 30px;
  min-height: 300px;
}
</style>
