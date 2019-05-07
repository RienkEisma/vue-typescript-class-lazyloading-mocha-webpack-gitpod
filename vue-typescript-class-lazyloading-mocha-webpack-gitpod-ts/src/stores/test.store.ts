import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import Store from "../store";

@Module({
    dynamic: true,
    store: Store,
    name: "testCounter",
    namespaced: true,
})
export default class TestModule extends VuexModule {

    public count: number = 0;

    public countHistory: number[] = [];

    public get lastFiveCountValues(): number[] {
        if (this.countHistory.length < 5) {
            return this.countHistory;
        } else {
            return this.countHistory.slice(0, 5);
        }
    }

    @Mutation
    public INCREMENT_COUNT(amount:number) {
        this.count += amount;
        this.countHistory.unshift(amount)
    }

    // loadResults will automatically be called when the inner async method promise resolves
    @Action({ commit: "INCREMENT_COUNT"})
    public async incrementCount({amount = 1}) {
        return await setTimeout(() => {
            return amount;
        }, 200) // just setTimeout to make it async, could be an api call
    }
}