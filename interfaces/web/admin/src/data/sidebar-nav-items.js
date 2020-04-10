export default function() {
  return [
    {
      title: "Overview",
      to: "/admin/",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Debates",
      htmlBefore: '<i class="material-icons">record_voice_over</i>',
      to: "/admin/debates",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">emoji_people</i>',
      to: "/admin/users",
    },
    {
      title: "Insights",
      htmlBefore: '<i class="material-icons">emoji_objects</i>',
      to: "/admin/insights",
    },
    {
      title: "Configure",
      htmlBefore: '<i class="material-icons">build</i>',
      to: "/admin/configure",
    },
    {
      title: "Exports",
      htmlBefore: '<i class="material-icons">import_export</i>',
      to: "/admin/exports",
    }
  ];
}
