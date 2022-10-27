import s from "./materialsPage.module.scss";

const MaterialsPage = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.container}>
        <h2 className={s.title}>Useful literature</h2>
        <ol className={s.literatureList}>
          <li>Testing dot.com Savin.</li>
          <li>A mental hospital in the hands of patients.</li>
          <li>Scrum. J. Sutherland.</li>
        </ol>
      </div>
      <div className={s.container}>
        <h2 className={s.title}>Useful resources</h2>
        <ol className={s.literatureList}>
          <li>Testing dot.com Savin.</li>
          <li>A mental hospital in the hands of patients.</li>
          <li>Scrum. J. Sutherland.</li>
        </ol>
      </div>
    </main>
  );
};

export default MaterialsPage;
