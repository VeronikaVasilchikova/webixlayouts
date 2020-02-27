const today = new Date();
const currentYear = today.getFullYear();

const form_edit_films_data = [
  {
    template:"Edit films",
    type:"section"
  },
  {
    view:"text",
    label:"Title",
    name:"title",
    required:true,
    invalidMessage:"Title must be filled in"
  },
  {
    view:"text",
    label:"Year",
    name:"year",
    //bottomPadding: 25,
    invalidMessage:`Year should be between 1970 and ${currentYear}`
  },
  {
    view:"text",
    label:"Rating",
    name:"rating",
    required:true,
    invalidMessage:"Rating cannot be empty or 0"
  },
  {
    view:"text",
    label:"Votes",
    name:"votes",
    invalidMessage:"Votes must be less than 100000"
  },
  {
    margin:10,
    cols:[
      {view:"button", id:"btnAddNew", value:"Add new", css:"webix_primary", width: 110},
      {view:"button", id:"btnClear", value:"Clear", width: 110}
    ]
  },
  {},
];
