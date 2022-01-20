import { Container, useColorModeValue, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/articale'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { ResumeSection, ResumeYear, ResumeDegree, ResumePlace, ResumeDesc, ResumeDegreee } from "../components/resume-section"
import { Skill, SkillSection, Description } from '../components/skill-section'

import thumbNutSamy from '../public/images/work/nutsamy.jpg'
import thumbMina from '../public/images/work/blackswan.jpg'
import thumbComm from '../public/certificat/communication.png'
import thumbNlp from '../public/certificat/nlp.png'
import thumbSoft from '../public/certificat/softSkills.png'
import thumbTraines from '../public/certificat/traines.png'

import thumbCreative from '../public/certificat/creativeThinking.png'
import thumbObjet from '../public/certificat/Objet-Oriented.png'
import thumbDesign from '../public/certificat/designpatterns.png'
import thumbArch from '../public/certificat/softwareArchitecture.png'

import CuteCat from '../components/layouts/cute-cat'
import NoSsr from '../components/no-ssr'


const Certifs = () => (
    <Layout title="Resume">
        <Container pt={50}>
            <NoSsr>
                <CuteCat />
            </NoSsr>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <ResumeSection>
                    <ResumeYear style={{ fontSize: 18 }} > 2021 </ResumeYear>
                    <ResumeDegree style={{ fontSize: 18 }}> National Engineering Diploma </ResumeDegree>
                    <ResumePlace style={{ fontSize: 13 }} > ESPRIT: Private High School of Engineering and Technologies, Ariana, Tunisia</ResumePlace>
                    <ResumeDesc style={{ fontSize: 15 }}> Majored in informatics, graduated with excellent appreciation. The title of my graduation thesis was "Nutritional Mobile Application For Patients On Dialysis".</ResumeDesc>
                </ResumeSection>
                <ResumeSection>
                    <ResumeYear style={{ fontSize: 18 }} > 2014 </ResumeYear>
                    <ResumeDegree style={{ fontSize: 18 }}> Scientific Baccalaureate Diploma in Mathematics </ResumeDegree>
                    <ResumePlace style={{ fontSize: 13 }} > El Amal High school, Ben Arous, Tunisia</ResumePlace>
                    <ResumeDesc style={{ fontSize: 15 }}> Graduated with Honor. The baccalaureate in Tunisia is a national diploma essential for entry into higher education training.</ResumeDesc>
                </ResumeSection>


            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Internships
                </Heading>
                <ResumeSection>
                    <ResumeYear style={{ fontSize: 18 }} > 2021 </ResumeYear>
                    <ResumeDegree style={{ fontSize: 18 }}> Development of mobile app for CKD patients </ResumeDegree>
                    <ResumePlace style={{ fontSize: 13 }} > The Military Instruction Hospital of Tunis, Tunis, Tunisa</ResumePlace>
                    <ResumeDesc style={{ fontSize: 15 }}> Development of nutritional app with Android , NodeJs and MongoDB.
                        Development of a chat-bot using python, nltk library and flask.
                    </ResumeDesc>
                </ResumeSection>
                <ResumeSection>
                    <ResumeYear style={{ fontSize: 18 }} > 2021 </ResumeYear>
                    <ResumeDegree style={{ fontSize: 18 }}> Teacher Assistant/Coach </ResumeDegree>
                    <ResumePlace style={{ fontSize: 13 }} > ESPRIT, Ariana, Tunisa</ResumePlace>
                    <ResumeDesc style={{ fontSize: 15 }}> Assisted in Spring courses and helped students with technical issues.
                        Coached in Angular projects.
                    </ResumeDesc>
                </ResumeSection>
                <ResumeSection>
                    <ResumeYear style={{ fontSize: 18 }} > 2018 </ResumeYear>
                    <ResumeDegree style={{ fontSize: 18 }}> Translating BigBlueButton modules to NodeJs</ResumeDegree>
                    <ResumePlace style={{ fontSize: 13 }} > READVICE, Tunis, Tunisia</ResumePlace>
                    <ResumeDesc style={{ fontSize: 15 }}> Development of a desktop application using the Electron framework and PHP.
                        Translation of BigBlueButton modules from PHP to NodeJs.
                        Development of unit tests.
                    </ResumeDesc>
                </ResumeSection>
            </Section>
            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    Certificates
                </Heading>
            </Section>
            <Heading style={{ fontSize: 20, fontWeight: 'normal' }} mb={5}>
                Software Architecture & Design :
            </Heading>
            <Section delay={0.6} >
                <SimpleGrid columns={[1, 2, 3]} gap={6}>
                    <GridItem title="Object-Oriented Design" thumbnail={thumbObjet} href="https://www.coursera.org/verify/YLQFHHFKWAS7" />
                    <GridItem title="Design Patterns" thumbnail={thumbDesign} href="https://www.coursera.org/verify/P2CU6XF5NWXB" />
                    <GridItem title="Software Architecture" thumbnail={thumbArch} href="https://www.coursera.org/verify/WYR98Y8DJD4F" />

                </SimpleGrid>
            </Section>
        </Container>
        <Container mt={5}>
            <Heading style={{ fontSize: 20, fontWeight: 'normal' }} mb={5}>
                Soft Skills :
            </Heading>
            <Section delay={0.8}>
                <SimpleGrid columns={[1, 2, 3]} gap={6}>
                    <GridItem title="Techniques and Tools for Success" thumbnail={thumbCreative} href="https://www.coursera.org/verify/25QUKYJM2VN3" />
                    <GridItem title="Communication Techniques" thumbnail={thumbComm} href="https://medsirat.com/" />
                    <GridItem title="Neuro-Linguistic Programming" thumbnail={thumbNlp} href="https://medsirat.com/" />
                    <GridItem title="Soft Skills" thumbnail={thumbSoft} href="https://medsirat.com/" />
                    <GridItem title="Training of Trainers" thumbnail={thumbTraines} href="https://medsirat.com/" />

                </SimpleGrid>
            </Section>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Coding Skills
                </Heading>
                <SkillSection>
                    <Skill style={{ fontSize: 18 }} > Java </Skill>
                    <Description style={{ fontSize: 14 }}> Knowledge of Collection, Interface, and other related concepts, such as OOP. The language I am most familiar with. When I was a student, I had prior experience working on various Java projects as part of a team in class. </Description>
                </SkillSection>
                <SkillSection>
                    <Skill style={{ fontSize: 18 }} > C#/.Net </Skill>
                    <Description style={{ fontSize: 14 }}>I first learnt C# in my first year of engineering, and then on my second year i had the opportunity to work on a JavaEE/.Net human resource management system with Advyteam as part of a team.</Description>
                </SkillSection>
                <SkillSection>
                    <Skill style={{ fontSize: 18 }} > NodeJs </Skill>
                    <Description style={{ fontSize: 14 }}>My first exposure to NodeJs was during my first internship at Readvice, where I was tasked with translating the well-known BigBlueButton modules from PHP to NodeJs. I grew more comfortable with it after using it on my graduation project.</Description>
                </SkillSection>
                <SkillSection>
                    <Skill style={{ fontSize: 18 }} > ReatJs </Skill>
                    <Description style={{ fontSize: 14 }}>I recently began studying React and used it to create my personal website. I also have a solid knowledge of HTML and CSS.</Description>
                </SkillSection>
                <SkillSection>
                    <Skill style={{ fontSize: 18 }} > Other Skills </Skill>
                    <Description style={{ fontSize: 14 }}>PHP, C++, C, Spring, Angular, Python, Symfony, Android, BD: SQL & MongoDB.</Description>
                </SkillSection>


            </Section>
        </Container>

    </Layout>
)

export default Certifs