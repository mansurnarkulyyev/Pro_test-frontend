import React from 'react'
import Container from '../../shared/components/Container';
import DiagramRechart from '../../shared/components/DiagramRechart';
import Main from '../../shared/components/Main';
import Section from '../../shared/components/Section';
import useBreakpoints from '../../shared/hooks/useBreakpoints';

const DiagramPage = () => {
    const { bigger1280px } = useBreakpoints();

    const markupNotDesktop = (
        <>
            <DiagramRechart />
        </>
    );
    const markupDesktop = (
        // <div className="wrapper-auth">
        <DiagramRechart />
        // </div>
    );
    return (
        <Main>
            <Section>
                {/* <DiagramRechart /> */}
                <Container>{bigger1280px ? markupDesktop : markupNotDesktop}</Container>

            </Section>
        </Main>
    );
}

export default DiagramPage;





