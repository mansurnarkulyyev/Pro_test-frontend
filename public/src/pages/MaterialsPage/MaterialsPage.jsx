import Materials from "../../modules/Materials/Materials";

import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";

import s from "./materialsPage.module.scss";

const MaterialsPage = () => {
  return (
    <Main>
      <Section className="materials">
        <Container>
          <Title text="Useful literature" className="materials" />
          <div className={s[`wrapper-list`]}>
            <Materials articels={true} />
          </div>

          <Title text="Useful resources" className="materials" />
          <div className={s[`wrapper-list`]}>
            <Materials links={true} resources={true} />
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default MaterialsPage;
