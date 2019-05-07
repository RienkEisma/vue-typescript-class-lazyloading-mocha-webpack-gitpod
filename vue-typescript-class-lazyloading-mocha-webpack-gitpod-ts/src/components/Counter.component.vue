<template>
    <div>
        <button id="incrementButton" @click="increment()">increment</button>
        <button id="decrementButton" @click="decrement()">decrement</button>
       <h2> Count: {{count}}</h2>
       <h2>Last five</h2>
       <p v-for="(item, index) in lastfive" v-bind:key="index">{{item}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import TestModule from '../stores/test.store';

const testStore = getModule(TestModule);


@Component
export default class CounterComponent extends Vue {
  @Prop() private count!: number;
  @Prop() private countHistory!: number[];

  public increment() {
      testStore.incrementCount({amount: 1});
  }

  public decrement() {
      testStore.incrementCount({amount: -1});
  }

  public get lastfive(): number[] {
      return testStore.lastFiveCountValues;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
