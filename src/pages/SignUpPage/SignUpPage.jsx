import SignUp from "../../modules/SignUp";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";
import AuthTextPart from "../../shared/components/AuthTextPart";

function SignUpPage() {
  return (
    <Main>
      <Section>
        <Container>
          <Title text="Sign Up" />
          <AuthTextPart />
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
