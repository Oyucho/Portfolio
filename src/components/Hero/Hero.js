import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there!!!
        </SectionTitle>
        <SectionText>
          Hey there, This is Bellah Oyucho I am a Software Developer who enjoys working using React.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          //window.location.href = 'public\files\resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
