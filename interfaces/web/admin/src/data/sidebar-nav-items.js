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
      to: "/admin/configure",
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
      title: "Exports",
      htmlBefore: '<i class="material-icons">import_export</i>',
      to: "/admin/exports",
    },
    {
      title: "Account",
      htmlBefore: '<i class="material-icons">account_balance</i>',
      to: "/admin/account",
    }
  ];
}
