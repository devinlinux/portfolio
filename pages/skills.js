import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import html from '../public/images/contents/html.jpg'
import css from '../public/images/contents/css.jpg'
import js from '../public/images/contents/javascript.jpg'
import jquery from '../public/images/contents/jquery.jpg'
import chakra from '../public/images/contents/chakra.jpg'
import next from '../public/images/contents/next.jpg'
import react from '../public/images/contents/react.jpg'
import three from '../public/images/contents/three.jpg'
import c from '../public/images/contents/c.jpg'
import cpp from '../public/images/contents/cpp.jpg'
import java from '../public/images/contents/java.jpg'
import framer from '../public/images/contents/framer.jpg'
import eslint from '../public/images/contents/eslint.jpg'

const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Skills
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Java"
            thumbnail={java}
            href="https://www.oracle.com/java/"
          />
          <GridItem
            title="C"
            thumbnail={c}
            href="https://www.cprogramming.com/"
          />
          <GridItem
            title="C++"
            thumbnail={cpp}
            href="https://isocpp.org/"
          />
          <GridItem
            title="JavaScript"
            thumbnail={js}
            href="https://www.javascript.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="HTML"
            thumbnail={html}
            href="https://html.com/"
          />
          <GridItem
            title="CSS"
            thumbnail={css}
            href="https://www.w3.org/Style/CSS/Overview.en.html"
          />
					<GridItem
						title="jQuery"
						thumbnail={jquery}
						href="https://jquery.com/"
					/>
					<GridItem
						title="three"
						thumbnail={three}
						href="https://threejs.org/"
					/>	
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="React"
            thumbnail={react}
            href="https://reactjs.org/"
          />
          <GridItem
            title="Chakra UI"
            thumbnail={chakra}
            href="https://chakra-ui.com/"
          />
					<GridItem
						title="Framer Motion"
						thumbnail={framer}
						href="https://www.framer.com/motion/"
					/>
					<GridItem
						title="Eslint"
						thumbnail={eslint}
						href="https://eslint.org/"
					/>
					<GridItem
						title="Next JS"
						thumbnail={next}
						href="https://nextjs.org/"
					/>	
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
