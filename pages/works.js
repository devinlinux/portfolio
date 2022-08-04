import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChess from '../public/images/chessGeneric.jpg'
import thumbRocket from '../public/images/rocketGeneric.jpg'
import thumbSite from '../public/images/siteGeneric.jpg'
import thumbCalc from '../public/images/calcGeneric.jpg'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      	<Section>
		  <WorkGridItem id="chess" title="JChess" thumbnail={thumbChess}>
		    A basic implementation of the game of Chess written in Java for a school project.
		  </WorkGridItem>
		</Section>

		<Section>
		  <WorkGridItem id="rocket" title="A Rocket in JavaScript" thumbnail={thumbRocket}>
				An interactive rocket game written in JavaScript. Use the Arrow Keys and Space Bar to control the rocket.				  
		  </WorkGridItem>
		</Section>

		<Section>
			<WorkGridItem id="portfolio1" title="My Original Portfolio" thumbnail={thumbSite}>
				My original portfolio website coded entirely by me in HTML, CSS, JavaScript, and PHP.
			</WorkGridItem>
		</Section>

		<Section>
			<WorkGridItem id="consolecalc" title="Windows Console Calculator" thumbnail={thumbCalc}>
				A Windows console calculator written in C++. This console calculator can run on any device running Windows. 
			</WorkGridItem>
		</Section>
	  </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
