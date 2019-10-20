const wrapFunctional = (FunctionalComp, compData) => ({
  components: { FunctionalComp },
  methods: compData.methods,
  computed: {
    eventListeners() {
      return compData.on(this);
    },
  },
  template: `
    <div>
      <FunctionalComp v-bind="$attrs" v-on="eventListeners" />
    </div>
  `,
});

export default wrapFunctional;
