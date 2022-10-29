import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getRemoteResults from "../../redux/questions/remoteResults/remoteResults-selectors";
import DiagramRechart from "../../modules/DiagramRechart/DiagramRechart";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";

const DiagramPage = () => {
  const [state, setState] = useState({ rights: 0, wrongs: 0 });
  const { kind } = useParams();
  const remoteResults = useSelector(getRemoteResults);

  useEffect(() => {
    if (!remoteResults.length) {
      return;
    }
    const { results } = remoteResults.find((item) => item.kind === kind);
    const [rights, wrongs] = results;
    setState({ rights, wrongs });
  }, [kind, remoteResults]);

  const { rights, wrongs } = state;

  return (
    <Main>
      <Section>
        <DiagramRechart rights={rights} wrongs={wrongs} />
      </Section>
    </Main>
  );
};

export default DiagramPage;
