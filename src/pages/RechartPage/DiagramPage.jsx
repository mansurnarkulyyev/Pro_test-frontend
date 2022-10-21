import { useSelector } from "react-redux";
import getQuestionsKind from "../../redux/questions/questionsKind/questionsKind-selectors";
import getRemoteResults from "../../redux/questions/remoteResults/remoteResults-selectors";
import DiagramRechart from "../../shared/components/DiagramRechart";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";

const DiagramPage = () => {
  const questionsKind = useSelector(getQuestionsKind);
  const remoteResults = useSelector(getRemoteResults);
  const { results } = remoteResults.find((item) => item.kind === questionsKind);
  const [rights, wrongs] = results;

  return (
    <Main>
      <Section>
        <DiagramRechart rights={rights} wrongs={wrongs} />
      </Section>
    </Main>
  );
};

export default DiagramPage;
