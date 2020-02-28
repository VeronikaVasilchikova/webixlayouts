const new_columns_name = [
  {
    id:"rank",
    header:"",
    width:60,
    css:"rank"
  },
  {
    id:"title",
    fillspace:true,
    minWidth:150,
    header:["FilmTitle", {content:"textFilter"}],
    sort:"string"
  },
  {
    id:"year",
    header:["Released", {content:"numberFilter"}],
    adjust:true,
    sort:"int"
  },
  {
    id:"votes",
    header:["Votes", {content:"numberFilter"}],
    sort:"string"
  },
  {
    width:50,
    template:"{common.trashIcon()}"
  }
];
