import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      Michael Bobrowski {new Date().getFullYear()}.
    </Box>
  )
}

export default Footer
