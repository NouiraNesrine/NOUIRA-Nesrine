import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
const LogoBox = styled.span`
font-size: 32px;
font-family: Caveat;
display: inline-flex;
align-items: center;
height: 50px;
line-height: 20px;
padding: 10px;
&:hover img {
    transform: scale(0.8);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={35} height={35} alt="logo" />
                    <Text style={{ color: useColorModeValue('#ffaeb2', '#ffd2b8') }} ml={3} >
                        Nesrine Nouira
                    </Text>

                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo