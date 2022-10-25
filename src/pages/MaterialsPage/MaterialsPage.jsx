import s from "./materialsPage.module.scss";

const MaterialsPage = () => {
  return (
    <main className={s.wrapper}>
      <h1 className={s.title}>Useful literature</h1>
      <ol className={s.literatureList}>
        <li>Testing dot.com Savin.</li>
        <li>A mental hospital in the hands of patients.</li>
        <li>Scrum. J. Sutherland.</li>
      </ol>
    </main>
  );
};

export default MaterialsPage;
