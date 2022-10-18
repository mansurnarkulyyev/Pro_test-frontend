import SignUp from "../../modules/SignUp";

import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import Main from "../../shared/components/Main";
import Title from "../../shared/components/Title/Title";

import s from "./signUp.module.scss";

function SignUpPage() {
  return (
    <Main>
      <Section>
        <Container>
          <Title text="Sign Up" />
          <p className={s.text}>
            <span className={s[`text--bold`]}>[ </span>We will help you find
            weak points in knowledge so that you can strengthen it. We will show
            you what is relevant to know for a{" "}
            <span className={s[`text--bold`]}>QA Engineer</span> and will try to
            make the learning process more diverse_{" "}
            <span className={s[`text--bold`]}>]</span>
          </p>
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
export default SignUpPage;
