<template>
  <ul class="tabs">
    <li
      class="tab-text"
      :class="{ 'tab--active': isFirstTabClicked }"
      @click="firstTabClicked"
    >
      <a> {{ firstTab }}</a>
    </li>
    <div class="divide-line"></div>
    <li
      class="tab-text"
      :class="{ 'tab--active': isSecondTabClicked }"
      @click="SecondTabClicked"
    >
      <a>{{ secondTab }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['firstTab', 'secondTab'],
  data() {
    return {
      isFirstTabClicked: true,
      isSecondTabClicked: false,
    };
  },
  methods: {
    firstTabClicked() {
      this.isFirstTabClicked = true;
      this.isSecondTabClicked = false;
      this.$emit('firstTabClicked');
    },
    SecondTabClicked() {
      this.isFirstTabClicked = false;
      this.isSecondTabClicked = true;
      this.$emit('SecondTabClicked');
    },
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
.tab-text {
  font-size: 2rem;
  font-weight: bold;
  color: var(--gray03);
}

.tabs {
  display: flex;
}

.tabs:hover {
  cursor: pointer;
}

.tab--active {
  color: var(--black);
}

.divide-line {
  width: 0.3rem;
  height: 2.4rem;
  margin: 0 1.2rem;
  background-color: var(--gray04);
}

@media (max-width: 768px) {
  .tab-text {
    font-size: 1.6rem;
  }

  .divide-line {
    width: 0.2rem;
    height: 1.8rem;
    margin: 0 1rem;
  }
}
</style>
