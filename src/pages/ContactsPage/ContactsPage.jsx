import Contacts from "../../modules/Contacts";

import Title from "../../shared/components/Title";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";
import Container from "../../shared/components/Container";

import s from "./contactsPage.module.scss";

const ContactsPage = () => {
  return (
    <Main>
      <Section className="contacts">
        <Container>
          <Title text="Out team" className="team" />
          <Contacts />
        </Container>
      </Section>
    </Main>
  );
};

export default ContactsPage;
