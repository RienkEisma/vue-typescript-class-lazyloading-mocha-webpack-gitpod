<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CounterComponent :count="count" :countHistory="countHistory"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CounterComponent from '@/components/Counter.component.vue'; // @ is an alias to /src
import { getModule } from 'vuex-module-decorators';
import TestModule from '../stores/test.store';

const testStore = getModule(TestModule);

@Component({
  components: {
    CounterComponent,
  },
})
export default class Counter extends Vue {

    public get count(): number {
        return testStore.count;
    }

    public get countHistory(): number[] {
        return testStore.countHistory;
    }

}
</script>
