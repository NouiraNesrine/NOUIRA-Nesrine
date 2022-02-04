import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
                    HRMS <Badge>2020</Badge>
                </Title>
                <Paragraph>
                    The objective of this project is to propose an application that helps the human resources department for a better management without the need to other tools or applications. First, we are going to provide a simple and detailed access to any employee’s information. Second, we will help the administration department in decision making and in proposing specific training referring to the managed informations. Finally, the application will provide a better management of the missions offered by the company and their expense notes as well.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repository</Meta>
                        <Link target="_blank" href=' https://gitlab.com/NouiraNesrine/pinet'>
                            Gitlab <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technologies</Meta>
                        <span>Java EE, .Net Framework, Python, MySQL, WildFly</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Read more</Meta>
                        <Link target="_blank" href='https://drive.google.com/file/d/1pBMU2JAQst25zynMrCC8dEFEkZiJe_FK/view?usp=sharing'>
                            Development Of A Human Resource Management System <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work