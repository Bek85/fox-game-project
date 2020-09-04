const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    // console.log("clock", this.clock);
    return this.clock;
  },

  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },

  wake() {
    console.log("awoken");
    this.current = "IDLING";
    this.wakeTime = -1;
  },

  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // do nothing
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
    }
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("Change weather");
  },

  cleanUpPoop() {
    console.log("Clean poop");
  },

  feed() {
    console.log("feed the fox");
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
