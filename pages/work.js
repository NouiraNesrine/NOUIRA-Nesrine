import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbNutSamy from '../public/images/work/nutritional_app.png'
import thumbHrms from '../public/images/work/hrms.png'
import thumbBBB from '../public/images/work/bbb.png'
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
                    Recent Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="nutsamy" title="NUTSAMY" thumbnail={thumbNutSamy}>
                            A nutritional app for CKD patients
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="hrms" title="HRMS" thumbnail={thumbHrms}>
                            HR management system
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="bbb" title="BBB API" thumbnail={thumbBBB}>
                            Redsign of BBB Api
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
