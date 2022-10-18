import useBreakpoints from "../../shared/hooks/useBreakpoints";

import SignIn from "../../modules/SignIn";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";
import AuthTextPart from "../../shared/components/AuthTextPart";
import AuthWrapperPage from "../../shared/components/AuthWrapperPage";

function SignInPage() {
  const { bigger1280px } = useBreakpoints();

  const markupNotDekstop = (
    <>
      <Title text="Pro Test" />
      <AuthTextPart />
      <SignIn />
    </>
  );
  const markupDekstop = (
    <AuthWrapperPage>
      <div>
        <Title text="Pro Test" />
        <AuthTextPart />
      </div>
      <SignIn />
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
export default SignInPage;
