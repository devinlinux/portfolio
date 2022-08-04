import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
	return (
		<Layout title="Console Calculator">
			<Container>
				<Title>
					Console Calculator <Badge>2022</Badge>
				</Title>
				<P>
					A basic Windows Console Calculator written in C++ using Visual Studio. The calculator was made to run on any device running the Windows operating system.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>
							Download
						</Meta>
						<Link href="https://michaelbobrowski.000webhostapp.com">
							Download
						</Link>	
					</ListItem>
					<ListItem>
						<Meta>
							Platform
						</Meta>
						<span>Windows</span>
					</ListItem>
				</List>
			</Container>
		</Layout>
	)
}

export default Work
