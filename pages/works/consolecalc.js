import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
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
					A basic Windows Console Calculator written in C++ using Visual Studio. The calculator was made to run on any device running the Windows operating system. Amy messages saying that this file is malicious is most likely a false flag. Even so, the choice is entirely your on whether or not to keep the download and run the program. 
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>
							Download
						</Meta>
						<Link href="https://michaelbobrowski.000webhostapp.com/projects/cpp/consolecalc/consolecalc.zip">
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
