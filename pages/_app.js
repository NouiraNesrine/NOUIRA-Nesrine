import { ChakraProvider } from "@chakra-ui/provider";   
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from "framer-motion";


const website =({Component,pageProps,router}) =>{
    return(
        <ChakraProvider theme={theme} >
            <Fonts/>
            <Layout router={router}  w='100%'>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}  w='100%' />
                </AnimatePresence> 
            </Layout>
        </ChakraProvider>
    )
}
export default website