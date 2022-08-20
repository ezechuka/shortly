import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import LinkInput from "./LinkInput"
import LinkItem from "./LinkItem"
import { USER_LINKS } from '../utils/data'

const Main = () => {

    const [allLinks, setAllLinks] = useState(() => JSON.parse(localStorage.getItem(USER_LINKS)) || [])

    const onItemAdded = (updatedLinks) => {
        setAllLinks(updatedLinks)
    }

    return (
        <Box as={'main'}>
            <LinkInput onItemAdd={onItemAdded} />
            <Box
                maxHeight={{base: '350px', md: '250px'}}
                marginTop={{ base: 2, md: 4 }}
                overflowY={'scroll'}>
                {allLinks.map(link => (
                    <LinkItem
                        key={link.shortLink}
                        originalLink={link.originalLink}
                        shortLink={link.shortLink} />
                ))}
            </Box>
        </Box>

    )
}

export default Main