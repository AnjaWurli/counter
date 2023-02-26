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
    countKey(event) {
      //only with space or enter
      if (event.code === "Enter" || event.code === "Space") {
        this.increaseCounter();
      }
    },
    reset(e) {
      this.counter = 0;
      this.hundred = 0;
      this.color = "";
      e.target.blur();
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
  created() {
    window.addEventListener("keydown", this.countKey);
  },
}).mount("#app");
