const form_edit_films_data = [
  {
    template:"Edit films",
    type:"section"
  },
  {
    view:"text",
    label:"Title",
    name:"title"
  },
  {
    view:"text",
    label:"Year",
    name:"year"
  },
  {
    view:"text",
    label:"Rating",
    name:"rating"
  },
  {
    view:"text",
    label:"Votes",
    name:"votes"
  },
  {
    margin:10,
    cols:[
      {view:"button", value:"Add new", css:"webix_primary", width: 110},
      {view:"button", value:"Clear", width: 110},
    ]
  },
  {},
];
