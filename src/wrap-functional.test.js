import '@babel/register';
import { mount } from '@vue/test-utils';
import FuncComp from './../__mocks__/func-comp';
import wrapFunctional from '.';

const COMP_TITLE = 'Unit Test Title';
const COMP_TEXT = 'Unit Testing';

let wrapped;

describe('Functional Wrapper', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    wrapped = wrapFunctional(FuncComp, {
      methods: {
        click() {
          this.$emit('click');
        },
      },
      on(vm) {
        return { click: vm.click };
      },
    });
  });

  test('should emit click event when inner functional component is clicked', () => {
    const wrapper = mount(wrapped, {
      propsData: {
        title: COMP_TITLE,
        text: COMP_TEXT,
      },
    });
    wrapper.find('aside').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  test('should have correct title prop from parent', () => {
    const wrapper = mount(wrapped, {
      propsData: {
        title: COMP_TITLE,
        text: COMP_TEXT,
      },
    });

    expect(wrapper.find('aside').element.title).toBe(COMP_TITLE);
  });

  test('should have correct text prop from parent', () => {
    const wrapper = mount(wrapped, {
      propsData: {
        title: COMP_TITLE,
        text: COMP_TEXT,
      },
    });

    expect(wrapper.find('aside').text()).toBe(COMP_TEXT);
  });
});
