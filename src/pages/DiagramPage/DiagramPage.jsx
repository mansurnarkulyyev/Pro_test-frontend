import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getRemoteResults from "../../redux/questions/remoteResults/remoteResults-selectors";
import DiagramRechart from "../../modules/DiagramRechart/DiagramRechart";
import Main from "../../shared/components/Main";
import Section from "../../shared/components/Section";

// import React from 'react'

const DiagramPage = () => {
  const { kind } = useParams();
  const remoteResults = useSelector(getRemoteResults);
  console.log(remoteResults);
  const results = remoteResults?.find((item) => item.kind === kind);
  const [rights, wrongs] = results;
  // debugger

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
