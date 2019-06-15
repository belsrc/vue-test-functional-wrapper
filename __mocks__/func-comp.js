// in __mocks__ for or lack of a better place
const comp = {
  functional: true,
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  render(h, { props, listeners }) {
    return h('aside', {
      on: { click: listeners.click },
      attrs: { title: props.title },
      domProps: { innerHTML: props.text },
    });
  },
};

module.exports = comp;
