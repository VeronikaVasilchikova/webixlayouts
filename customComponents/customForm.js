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
        label: "Cancel"
      };
      const btnSave = {
        view: "button",
        label: "Save",
        css: "webix_primary"
      };
      config.elements = [
        ...array,
        { margin: 5, cols: [btnCancel, btnSave] }
      ];
    },
  },
  webix.ui.form
);
