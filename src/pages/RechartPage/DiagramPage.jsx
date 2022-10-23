import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getRemoteResults from "../../redux/questions/remoteResults/remoteResults-selectors";
import DiagramRechart from "../../shared/components/DiagramRechart";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";

import React from "react";

const DiagramPage = () => {
  const { kind } = useParams();
  const remoteResults = useSelector(getRemoteResults);
  const { results } = remoteResults.find((item) => item.kind === kind);
  const [rights, wrongs] = results;

  return (
    <Main>
      <Section>
        <DiagramRechart />
      </Section>
    </Main>
  );
};

export default DiagramPage;
