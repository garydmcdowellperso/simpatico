export default function() {
  return [
    {
      title: "Overview",
      to: "/",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Debates",
      htmlBefore: '<i class="material-icons">record_voice_over</i>',
      to: "/debates",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">emoji_people</i>',
      to: "/users",
    },
    {
      title: "Insights",
      htmlBefore: '<i class="material-icons">emoji_objects</i>',
      to: "/insights",
    },
    {
      title: "Configure",
      htmlBefore: '<i class="material-icons">build</i>',
      to: "/configure",
    },
    {
      title: "Exports",
      htmlBefore: '<i class="material-icons">import_export</i>',
      to: "/exports",
    }
  ];
}
