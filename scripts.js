Vue.createApp({
  data() {
    return {
      counter: 0,
      hundred: 0,
      color: "",
      increaseBy: 10,
    };
  },
  methods: {
    increaseCounter() {
      this.counter += this.increaseBy;
      if (this.counter - this.hundred > 100) {
        this.hundred += 100;
        this.color = this.randomColor();
      }
    },
    reset() {
      this.counter = 0;
      this.hundred = 0;
      this.color = "";
    },
    random(min, max) {
      const num = Math.floor(Math.random() * (max - min)) + min;
      return num;
    },
    randomColor() {
      return `rgb(${this.random(0, 255)}, ${this.random(0, 255)}, ${this.random(
        0,
        255
      )})`;
    },
  },
}).mount("#app");
