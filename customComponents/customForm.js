webix.protoUI(
  {
    name: "myReusableForm",
    defaults: {
      scroll: false,
      autoheight: true
    },
    $init: function(config) {
      const fieldFName = {
        view: "text",
        label: "First name",
        name: "fname"
      };
      const fieldLName = {
        view: "text",
        label: "Second name",
        name: "sname"
      };
      const fieldAddress = {
        view: "text",
        label: "Address",
        name: "address"
      };
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
        fieldFName,
        fieldLName,
        fieldAddress,
        { margin: 5, cols: [btnCancel, btnSave] }
      ];
    },
    saveAction: function() {},
    cancelAction: function() {}
  },
  webix.ui.form
);
