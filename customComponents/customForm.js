webix.protoUI(
  {
    name: "myReusableForm",
    defaults: {
      scroll: false,
      autoheight: true
    },
    $init: function (config) {
      const fields = config.fields;
      const array = fields.map((item, index) => {
        return {
          id: `${index}`,
          view: "text",
          label: `${item[0].toUpperCase()}${item.slice(1)}`,
          name: `${item}`
        }
      });
      const btnCancel = {
        view: "button",
        label: "Cancel",
        click: this.cancelAction
      };
      const btnSave = {
        view: "button",
        label: "Save",
        css: "webix_primary",
        click: this.saveAction
      };
      config.elements = [
        ...array,
        { margin: 5, cols: [btnCancel, btnSave] }
      ];
    },
    saveAction: function () {
      webix.alert("Default save action");
    },
    cancelAction: function () {
      webix.alert("Default cancel action");
    }
  },
  webix.ui.form
);
