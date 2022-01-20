import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import {Global } from '@emotion/react'
import imageLoader from '../libs/loader'
export const GridItem=({children, href, title, thumbnail })=>(
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} loader={imageLoader} alt={title} className="grid-item-thumbnail"
            placeholder="blur" loading="lazy" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={1} fontSize={14}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem=({children,id,title,thumbnail})=>(
    <Box w="100%" align="center">
        <NextLink href={`/work/${id}`}>
            <LinkBox cursor="pointer">
            <Image src={thumbnail} loader={imageLoader} alt={title} className="grid-item-thumbnail"
            placeholder="blur" loading="lazy" />
            <LinkOverlay href={`/work/${id}`}>
                <Text mt={2} fontSize={20}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail{
        border-radius:12px;
    }
    `}
    />
)