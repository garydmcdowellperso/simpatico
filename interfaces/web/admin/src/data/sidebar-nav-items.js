export default function() {
  return [
    {
      title: "Overview",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">emoji_people</i>',
      to: "/blog-posts",
    },
    {
      title: "Insights",
      htmlBefore: '<i class="material-icons">emoji_objects</i>',
      to: "/add-new-post",
    },
    {
      title: "Configure",
      htmlBefore: '<i class="material-icons">build</i>',
      to: "/components-overview",
    },
    {
      title: "Exports",
      htmlBefore: '<i class="material-icons">import_export</i>',
      to: "/tables",
    }
  ];
}
