import {Container, Badge, Link,List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,WorkImage,Meta } from '../../components/work-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/articale'

const Work= ()=>{
    return(
        <Layout title="NutSamy">
            <Container>
                <Title>
                    NutSamy <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A Nutritionnal mobile app for chronic kidney disease, the app contains a large food database over 250+ raw food and recipes with vitamins and mineral content checked and approved by the USD Agriculture department. Apart from daily logs and customizable meals what makes the app stand out is the chatbot that we implemented inside the app it can respond to most of the patient frequent question whithout the need to visit a specialist to check. This app was developped with a team of doctors of the Military Hospital of Tunis and is now under clinical trials. Hope it will be availbale soon on the store.  
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.youtube.com/watch?v=izGwDsrQ1eQ'>
                            Will be up soon ♥ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs,Java,xml,MongoDB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Article</Meta>
                        <Link href='https://www.youtube.com/watch?v=izGwDsrQ1eQ'>
                             soon ♥ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/work/nutsamy.jpg" alt="NutSamy"/>
            </Container>
        </Layout>
    )
}

export default Work