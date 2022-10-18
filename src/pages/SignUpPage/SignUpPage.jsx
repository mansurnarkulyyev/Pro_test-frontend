import useBreakpoints from "../../shared/hooks/useBreakpoints";

import SignUp from "../../modules/SignUp/SignUp";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";
import AuthTextPart from "../../shared/components/AuthTextPart";
import AuthWrapperPage from "../../shared/components/AuthWrapperPage";

function SignUpPage() {
  const { bigger1280px } = useBreakpoints();

  const markupNotDekstop = (
    <>
      <Title text="Pro Test" />
      <AuthTextPart />
      <SignUp />
    </>
  );
  const markupDekstop = (
    <AuthWrapperPage>
      <div>
        <Title text="Pro Test" />
        <AuthTextPart />
      </div>
      <SignUp />
    </AuthWrapperPage>
  );

  return (
    <Main>
      <Section>
        <Container>{bigger1280px ? markupDekstop : markupNotDekstop}</Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
