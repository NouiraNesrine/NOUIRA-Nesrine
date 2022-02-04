import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articale'
import SmolAme from '../../components/layouts/smol-holomyth'
import NoSsr from '../../components/no-ssr'

const Work = () => {
    return (
        <Layout title="NUTSAMY" pt={50}>
            <NoSsr>
                <SmolAme />
            </NoSsr>
            <Container>
                <Title>
                    BigBlueButton Api <Badge>2018</Badge>
                </Title>
                <Paragraph>
                    Redesign of BigBlueButton meeting APIs to NodeJS .Development of a desktop application to manage meetings and store records.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Environment</Meta>
                        <span>NodeJs, PHP, XML, SQL, Electron, Bitbucket, AWS Desk, Jira</span>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work