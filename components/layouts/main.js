import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'

import Footer from '../footer'

const Main = ({children,router}) => {
    return (
        <Box as="main" pb={8}>
        <Head>
        <meta name="description" content="Nesrine's homepage" />
        <meta name="author" content="Nesrine Nouira" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Nesrine Nouira - Homepage </title>
        </Head>
        <Navbar path={router.asPath}/>
        <Container maxW="container.md" >
        
        {children}
        <Footer/>
        </Container>
        </Box>
    )
}

export default Main