import { Button, Input, Flex, Text, Spinner } from "@chakra-ui/react"
import { useState } from "react"

import bgShortenDesktop from '../assets/bg-shorten-desktop.svg'
import bgShortenMobile from '../assets/bg-shorten-mobile.svg'
import { fetchApi } from "../utils/fetchApi"
import { USER_LINKS } from '../utils/data'

const LinkInput = ({ onItemAdd }) => {

    const [link, setLink] = useState('')
    const [isEmpty, setIsEmpty] = useState(false) // set to false initially even though input is actually empty
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const value = event.target.value
        setLink(value)
        value.trim().length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }

    // const handleClick = () => {
    //     if (link.trim().length === 0) {
    //         setIsEmpty(true)
    //         return
    //     } else {
    //         setIsEmpty(false)
    //         setLoading(true)
    //     }

    //     const originalLink = 'https://twitter.com/frontendmentor'
    //     const shortLink = 'shorten_link2'
    //     const linkObj = { originalLink, shortLink }
    //     const linkArray = JSON.parse(localStorage.getItem(USER_LINKS)) || []

    //     linkArray.push(linkObj)
    //     localStorage.setItem(USER_LINKS, JSON.stringify(linkArray))

    //     onItemAdd(JSON.parse(localStorage.getItem(USER_LINKS)) || [])
    //     console.log("successful")
    //     setLoading(false)
    // }

    const handleClick = () => {
        console.log(link)
        if (link.trim().length === 0) {
            setIsEmpty(true)
            return
        } else {
            setIsEmpty(false)
            setLoading(true)
        }

        fetchApi(link).then(res => {
            const data = res.data

            const originalLink = data.result.original_link
            const shortLink = data.result.full_short_link
            const linkObj = { originalLink, shortLink }
            const linkArray = JSON.parse(localStorage.getItem(USER_LINKS)) || []

            linkArray.unshift(linkObj)
            localStorage.setItem(USER_LINKS, JSON.stringify(linkArray))

            onItemAdd(JSON.parse(localStorage.getItem(USER_LINKS)) || [])
            setLoading(false)
        }).catch(err => {
            console.error('request error', err.request)
            setLoading(false)
        })
    }

    return (
        <Flex
            backgroundImage={{ base: bgShortenMobile, md: bgShortenDesktop }}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={{ base: 'right top', md: 'center top' }}
            backgroundColor={'dark-violet-pr'}
            padding={{ base: 6, md: 12 }}
            marginX={{ base: 4, md: 0 }}
            marginTop={-20}
            rounded={{ base: 'xl', md: 'lg' }}
            justifyContent={'center'}
            flexDirection={{ base: 'column', md: 'row' }}>

            <Flex
                flexDirection={'column'}
                flexGrow={1}>
                <Input
                    backgroundColor={'white'}
                    size='lg'
                    value={link}
                    type='text'
                    isInvalid={isEmpty}
                    placeholder={'Shorten a link here...'}
                    errorBorderColor={'red-sc'}
                    onChange={handleChange}
                    focusBorderColor={'cyan-pr'}
                />

                {isEmpty && <Text
                    color={'red-sc'}
                    marginTop={1}
                    fontSize={'xs'}
                    fontStyle={'italic'}>
                    Please add a link
                </Text>
                }
            </Flex>

            <Button
                variant={'secondary'}
                paddingX={{ md: 8 }}
                marginLeft={{ md: 4 }}
                marginTop={{ base: 4, md: 0 }}
                onClick={handleClick}>
                {loading ? <Spinner
                    size='md'
                />
                    : <Text
                        color='white'>
                        Shorten it!
                        </Text>
                }
            </Button>

        </Flex>
    )
}

export default LinkInput