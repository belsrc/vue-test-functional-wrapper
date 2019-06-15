# vue-test-functional-wrapper

[![Last Commit](https://img.shields.io/github/last-commit/belsrc/vue-test-functional-wrapper/master.svg?style=flat-square)](https://github.com/belsrc/vue-test-functional-wrapper/commits/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/vue-test-functional-wrapper/pulls)



## Install

```bash
npm i -D @belsrc/vue-test-functional-wrapper
```

## Use

```js
// component.test.js

let wrapped;

describe('Component', () => {
  beforeEach(() => {
    wrapped = wrapFunctional(Component, {
      methods: { click() { this.$emit('click'); } },
      on(vm) { return { click: vm.click } },
    });
  });

  describe('Rendering', () => {
    test('comthing', () => {
      const wrapper = mount(wrapped, {
        propsData: { foo: 'bar' },
      });

      ...
    });
  });
});
```

## LICENCE

[MIT](LICENCE)
