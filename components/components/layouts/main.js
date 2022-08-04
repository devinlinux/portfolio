import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../shuttle-loader'

const SpaceShuttle = dynamic(() => import('../shuttle'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michael Bobrowski's Website" />
        <meta name="author" content="Michael Bobrowski" />
        <link rel="apple-touch-icon" href="/michael.jpg" />
        <link rel="shortcut icon" href="/michael.jpg" type="image/x-icon" />
        <meta property="og:site_name" content="Michael Bobrowski" />
        <meta name="og:title" content="Michael Bobrowski" />
        <meta property="og:type" content="website" />
        <title>Michael Bobrowski | Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <SpaceShuttle />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
