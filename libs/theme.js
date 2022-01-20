import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
 

const styles={
    global: props =>({
        body: {
            bg : mode ('#FFFAF7', '#202023')(props),
            fontFamily: "'Nunito'",
            color: mode ('#453F3D', '#F3F3F3')(props)
        }
    })
    
}

const components ={
    Heading: { 
        variants: {
            'section-title':  props =>({
                color: mode('#FFA8A9','#FFDAC4')(props),
                textDecoration: 'underline',
                fontSize: 24,
                fontFamily:"'Asap Condensed'",
                textUnderLineOffset: 10,
                textDecorationColor:mode('#FFA8A9','#FFDAC4')(props),
                textDecorationThickness: 3,
                marginTop: 3,
                marginBottom: 4
            }),
            'page-title': {
                textDecoration: 'none',
                fontSize: 20,
                fontFamily:"'Asap Condensed'",
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props =>({
            color: mode('#ffaeb2','#ffd2b8')(props),
            textUnderlineOffset:3
        })
    },
    Button: {
        baseStyle: props =>({
            color: mode('#ffaeb2','#ffd2b8')(props),
            outline: 'none'
        })
    }
}

const fonts = {
    heading: "'Asap Condensed'"
}

const colors = {
    glassTeal:'#'
}

const config = {
    initialColorMode:'dark',
    useSystemClorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme