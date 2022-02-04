import { Container, Box, Heading, useColorModeValue, Link, Button, List, ListItem, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/articale"
import { IoLogoLinkedin, IoLogoGithub, IoLogoFacebook, IoLogoGitlab } from 'react-icons/io5'
import DoughnutShop from '../components/layouts/doughnut-shop'
import NoSsr from '../components/no-ssr'
const Page = () => {
    return (
        <Layout w='100%'>
            <NoSsr>
                <DoughnutShop />
            </NoSsr>
            <Container w='100%' >
                <Box display={{ md: 'flex' }} >
                    <Box flexGrow={1}>

                        <Heading as="h2" style={{ fontSize: 40, fontFamily: "'Caveat'" }} color={useColorModeValue('#ffaeb2', '#ffd2b8')}>
                            Nesrine Nouira
                        </Heading>
                        <p style={{ fontSize: 12, opacity: 0.5 }} > Majored in Information Systems and Software Engineering   </p>
                        <p style={{ fontSize: 16, opacity: 0.9 }} > <strong> Developper, Designer, and sometimes Artist :3 <br /> </strong></p>
                        <p style={{ fontSize: 16 }} > Fuelled by coffee, good music and passion for new technologies. I am a self-motivated and dedicated creative individual that is excited about technology and enthusiastic about innovation. I am always looking for new opportunities to shine and surpass barriers. </p>

                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">

                    </Box>
                </Box>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>

                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed my software engineering Program in the Private Higher School of Engineering and Technology ESPRIT .
                    </BioSection>

                </Section>
                <Section>
                    <Heading as="h3" variant="section-title">
                        What I ♥
                    </Heading>
                    <Paragraph>
                        Coffe ,Art , Video Games and {''}
                        <Link href="https://www.youtube.com/watch?v=yURRmWtbTbo&list=RDyURRmWtbTbo&start_radio=1" >
                            Music
                        </Link>
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <Paragraph>
                        You can always reach me through one of this links. Can't wait to have more friends, don't hesitate and feel free to contact me , i'm always open for new experiences.

                    </Paragraph>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/NouiraNesrine" target="_blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
                                    Github
                                </Button>
                            </Link>
                            <Link href="https://www.facebook.com/nesrine.nouira.549/" target="_blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoFacebook} />}>
                                    Facebook
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/nesrine-nouira-b77060147/" target="_blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Linkedin
                                </Button>
                            </Link>
                            <Link href=" https://gitlab.com/NouiraNesrine" target="_blank">
                                <Button variant="ghost" leftIcon={<Icon as={IoLogoGitlab} />}>
                                    Gitlab
                                </Button>
                            </Link>

                        </ListItem>
                    </List>
                    <Box align="center" my={4}>
                        <NextLink href="/work">
                            <Button rightIcon={<ChevronRightIcon />} >
                                My Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page