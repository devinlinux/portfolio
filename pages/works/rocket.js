import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
	return (
		<Layout title="JS Rocket">
			<Container>
				<Title>
					Rocket in JavaScript <Badge>2022</Badge>
				</Title>
				<P>
					An interactice rocket written in JavaScript. You can use the left / right arrow keys to controls the direction that the rocket is travelling, the up arrow key to fire the main booster, the down arrow key to use the inertial dampeners, and the space bar to use the after burner.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>
							Play
						</Meta>	
						<Link href="https://michaelbobrowski.000webhostapp.com">
							Play
						</Link>	
					</ListItem>
					<ListItem>
							<Meta>
								Platform
							</Meta>
							<span>Any Platform that has a Web Browser</span>
					</ListItem>
				</List>
			</Container>
		</Layout>
	)
}

export default Work
