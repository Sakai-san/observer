const observable = function(state, subscribe) {
  state = this.state;
  subscribe = this.subscribe;

  update = newState => {
    if (this.state !== newState) {
      this.subscribe();
      this.state = newState;
    }
  };
};
