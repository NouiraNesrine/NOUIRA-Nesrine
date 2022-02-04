import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue

} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../libs/theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children }) => {
    const active = path == href
    const inactiveColor = useColorModeValue('#FFA8A9', '#FFDAC4')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? useColorModeValue('#FFDAC4', '#FFA8A9') : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#FFFAF7', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center"
                justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1}
                    mt={{ base: 4, md: 2 }}>

                    <LinkItem href="/resume" path={path}> <strong>Resume</strong></LinkItem>
                    <LinkItem href="/work" path={path}> <strong>Projects</strong></LinkItem>
                    <LinkItem href="/contact" path={path}> <strong>Contact</strong></LinkItem>
                    <Link _target="_blank" href="https://github.com/NouiraNesrine/NOUIRA-Nesrine"
                        path={path} display="inline-flex" alignItems="center" style={{ gap: 4 }} pl={2} >
                        <IoLogoGithub />
                        Source
                    </Link>

                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu" >
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                color="#FFDAC4"
                                aria-label="Options"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                            <MenuList color="#FFDAC4" bg={useColorModeValue('#FFFAF7', '#20202380')} style={{ outline: 'none', boxShadow: 'none' }}>
                                <NextLink href="/" passHref >
                                    <MenuItem as={Link} style={{ outline: 'none', boxShadow: 'none' }} >
                                        About
                                    </MenuItem>
                                </NextLink>


                                <NextLink href="/resume" passHref>
                                    <MenuItem as={Link} style={{ outline: 'none', boxShadow: 'none' }}>
                                        Resume
                                    </MenuItem>
                                </NextLink>

                                <NextLink href="/work" passHref>
                                    <MenuItem as={Link} style={{ outline: 'none', boxShadow: 'none' }}>
                                        Projects
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link} style={{ outline: 'none', boxShadow: 'none' }}>
                                        Contact
                                    </MenuItem>
                                </NextLink>


                            </MenuList>

                        </Menu>
                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default Navbar