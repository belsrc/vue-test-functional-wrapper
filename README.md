# vue-test-functional-wrapper

[![Build Status](https://github.com/belsrc/vue-test-functional-wrapper/workflows/build-check/badge.svg)](https://github.com/belsrc/vue-test-functional-wrapper/actions)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/belsrc/vue-test-functional-wrapper.svg?logo=code%20climate&logoWidth=14&style=flat-square)](https://codeclimate.com/github/belsrc/vue-test-functional-wrapper/maintainability)
[![Code Coverage](https://img.shields.io/codeclimate/coverage/belsrc/vue-test-functional-wrapper?logo=code%20climate&style=flat-square)](https://codeclimate.com/github/belsrc/vue-test-functional-wrapper/test_coverage)
[![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/belsrc/vue-test-functional-wrapper.svg?logo=snyk&logoWidth=14&style=flat-square)](https://app.snyk.io/org/belsrc/project/0623bc36-ba88-4751-b85c-6f93c28b5f7c)
[![Last Commit](https://img.shields.io/github/last-commit/belsrc/vue-test-functional-wrapper/master.svg?logo=github&logoWidth=14&style=flat-square)](https://github.com/belsrc/vue-test-functional-wrapper/commits/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/vue-test-functional-wrapper/pulls)

## Install

```bash
npm i -D @belsrc/vue-test-functional-wrapper
```

## Use

```js
// functional-component.test.js
import FunctionalComponent from './functional-component';

let wrapped;

describe('FunctionalComponent', () => {
  beforeEach(() => {
    wrapped = wrapFunctional(FunctionalComponent, {
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
