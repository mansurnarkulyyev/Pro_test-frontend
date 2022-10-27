import MaterialsList from "./MaterialsList";

function Materials({ articels, links }) {
  const literature = [
    { title: "Testing dot.com Savin", link: "" },
    { title: "Testing dot.com Savin", link: "" },
    { title: "Testing dot.com Savin", link: "" },
  ];
  const resources = [
    { title: "Testing dot.com Savin", link: "" },
    { title: "Testing dot.com Savin", link: "" },
    { title: "Testing dot.com Savin", link: "" },
  ];

  function onAdd() {}
  function onDelete() {}

  return (
    <>
      {articels && (
        <MaterialsList items={literature} onDelete={onDelete} onAdd={onAdd} />
      )}
      {links && (
        <MaterialsList
          items={resources}
          onDelete={onDelete}
          onAdd={onAdd}
          resources={true}
        />
      )}
    </>
  );
}

export default Materials;
