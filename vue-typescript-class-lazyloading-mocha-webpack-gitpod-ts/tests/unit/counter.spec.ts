import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Counter from '@/views/Counter.vue';
import flushPromises from 'flush-promises';

describe('Counter.vue', () => {
  it('renders a text containing ' + '"Last five"' + ' when passed', () => {
    const wrapper = mount(Counter, {
      propsData: {},
    });
    expect(wrapper.text()).to.include('Last five');
  });
});

// this is not a unit test as it should be
it('fetches async when a button is clicked', (done) => {
  const wrapper = mount(Counter, {
      propsData: {},
    });
  wrapper.find('button#incrementButton').trigger('click');
  // the timeout approach works!
  setTimeout(() => {
      expect(wrapper.text()).to.include('Count: 1');
      done();
  }, 1000);
  // this is the documented way, but it does not seem to work for vuex promises or something
//   wrapper.vm.$nextTick(() => {
//     expect(wrapper.text()).to.include('Count: 1');
//     // expect(wrapper.vm.value).toBe('value');
//     done()
//   })
});

// this is not a unit test as it should be
it('fetches async when a button is clicked2', async () => {
  const wrapper = mount(Counter, {
      propsData: {},
    });
  wrapper.find('button#incrementButton').trigger('click');
  // the flushPromises approach
  await flushPromises()
  expect(wrapper.text()).to.include('Count: 1');
});



