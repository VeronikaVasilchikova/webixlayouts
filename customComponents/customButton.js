webix.protoUI(
  {
    name: "myThreeStateButton",
    $init: function(config) {
      let state = config.state || 0;
      config.label = config.states[state];
      webix.html.addCss(this.$view, "webix_state_" + state);

      this.attachEvent("onItemClick", function() {
        let state = this.config.state;
        webix.html.removeCss(this.$view, "webix_state_" + state);
        state++;
        if (state > 2) {
          state = 0;
        }
        this.config.state = state;
        this.config.label = this.config.states[state];
        this.refresh();
        webix.html.addCss(this.$view, "webix_state_" + state);
        this.callEvent("onStateChange", [ state ]);
      });
    }
  },
  webix.ui.button
);
