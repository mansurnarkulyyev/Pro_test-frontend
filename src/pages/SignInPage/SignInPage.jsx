import SignIn from "../../modules/SignIn";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";

function SignInPage() {
  return (
    <Main>
      <Section>
        <Container>
          <Title text="Sign In" />
        </Container>
      </Section>
    </Main>
  );
}
export default SignInPage;
