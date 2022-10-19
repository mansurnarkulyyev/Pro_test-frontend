import useBreakpoints from "../../shared/hooks/useBreakpoints";

import SignUp from "../../modules/SignUp/SignUp";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";
import AuthTextPart from "../../shared/components/AuthTextPart";

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
    <div className="wrapper-auth">
      <div className="wrapper-title-text">
        <Title text="Pro Test" />
        <AuthTextPart />
      </div>
      <SignUp />
    </div>
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
