import {Container, Heading, SimpleGrid,Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbNutSamy from '../public/images/work/nutsamy.jpg'
import thumbMina from '../public/images/work/blackswan.jpg'
import Layout from "../components/layouts/articale"

import SmolAme from '../components/layouts/smol-holomyth'
import NoSsr from '../components/no-ssr'

const Work = () => {
    return (
        <Layout title="Work" pt={50}>
             <NoSsr>
            <SmolAme />
            </NoSsr>
        <Container >
            <Heading as="h3" fontSize={20} mb={4}>
                My Work ♥
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="nutsamy" title="NutSamy" thumbnail={thumbNutSamy}>
                        A nutritional app for kidney disease patient
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="mina" title="blackswan" thumbnail={thumbMina}>
                        Just tried to draw my lovely blackswan
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Work
