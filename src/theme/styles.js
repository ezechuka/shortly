import { extendTheme } from "@chakra-ui/react"

export const globalStyles = extendTheme({
    colors: {
        'gray-nl': 'hsl(0, 0%, 75%)',
        'red-sc': 'hsl(0, 87%, 67%)',
        'very-dark-blue-nl': 'hsl(255, 11%, 22%)',
        'cyan-pr': 'hsl(180, 66%, 49%)',
        'grayish-violet-nl': 'hsl(257, 7%, 63%)',
        'dark-violet-pr': 'hsl(257, 27%, 26%)',
        'very-dark-violet-nl': 'hsl(260, 8%, 14%)'
    },
    fonts: {
        body: `'Poppins', sans-serif`
    },
    components: {
        Button: {
            variants: {
                primary: {
                    rounded: '3xl',
                    bg: 'cyan-pr',
                    color: 'white',
                    paddingY: 6,
                    _hover: {
                        cursor: 'pointer',
                        bg: 'hsla(180, 66%, 49%, 0.35)'
                    }
                },
                secondary: {
                    rounded: 'md',
                    bg: 'cyan-pr',
                    color: 'white',
                    paddingY: 6,
                    _hover: {
                        cursor: 'pointer',
                        bg: 'hsl(180, 66%, 70%)'
                    }
                }
            }
        }
    }
})