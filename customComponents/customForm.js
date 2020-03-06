webix.protoUI(
  {
    name: "myReusableForm",
    defaults: {
      scroll: false,
      autoheight: true
    },
    $init: function (config) {
      const fields = config.fields;
      const array = fields.map(item => {
        return {
          view: "text",
          label: `${item[0].toUpperCase()}${item.slice(1)}`,
          name: `${item}`
        }
      });
      const btnCancel = {
        view: "button",
        label: "Cancel",
        click: config.cancelAction || function () { webix.alert("Default cancel action"); }
      };
      const btnSave = {
        view: "button",
        label: "Save",
        css: "webix_primary",
        click: config.saveAction || function () { webix.alert("Default save action"); }
      };
      config.elements = [
        ...array,
        { margin: 5, cols: [btnCancel, btnSave] }
      ];
    },
  },
  webix.ui.form
);
