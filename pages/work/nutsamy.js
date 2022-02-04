import { Container, Badge, Link, List, Heading, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articale'
import SmolAme from '../../components/layouts/smol-holomyth'
import NoSsr from '../../components/no-ssr'
import ReactPlayer from 'react-player'

const Work = () => {
    return (
        <Layout title="NUTSAMY" pt={50}>
            <NoSsr>
                <SmolAme />
            </NoSsr>
            <Container>
                <Title>
                    NutSamy <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A Nutritionnal mobile app for chronic kidney disease, the app contains a large food database over 250+ raw food and recipes with vitamins and mineral content checked and approved by the USD Agriculture department. Apart from daily logs and customizable meals what makes the app stand out is the chatbot that we implemented inside the app it can respond to most of the patient frequent question whithout the need to visit a specialist to check. This app was developped with a team of doctors of the Military Hospital of Tunis and is now under clinical trials. Hope it will be availbale soon on the store.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repository</Meta>
                        <span>Unfortunately I was unstucted by the HMPIT to turn the repo to private due to some security issues</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, Java, Python, Flask, MongoDB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Read more</Meta>

                        <Link target="_blank" href='https://drive.google.com/file/d/1llMNx6SgUyQUTLSt7_A6t9iPTdtoARPD/view?usp=sharing'>
                            Nutritional Mobile Application For Patients On Dialysis <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <Heading style={{ fontSize: 20, fontWeight: 'normal' }} mb={5} pt={10}>
                    App Demo
                </Heading>
                <ReactPlayer url="/videos/nutsamy.mp4" eight="290" controls={true} />

            </Container>
        </Layout>
    )
}

export default Work