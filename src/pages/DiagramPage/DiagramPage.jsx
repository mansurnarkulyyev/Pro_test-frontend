import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getRemoteResults from "../../redux/questions/remoteResults/remoteResults-selectors";
import DiagramRechart from "../../modules/DiagramRechart/DiagramRechart";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";

const DiagramPage = () => {
  const { kind } = useParams();
  const remoteResults = useSelector(getRemoteResults);
  const { results } = remoteResults.find((item) => item.kind === kind);
  console.log({ remoteResults, results });
  const [rights, wrongs] = results;

  return (
    <Main>
      <Section>
        <DiagramRechart rights={rights} wrongs={wrongs} />
        {/* <DiagramRechart /> */}
      </Section>
    </Main>
  );
};

export default DiagramPage;
