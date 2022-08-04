import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
	return (
		<Layout title="Portfolio">
			<Container>
				<Title>
					My Original Portfolio <Badge>2022</Badge>
				</Title>
				<P>
					The original portfolio that I made for a summer class. Coded entirely in HTML, CSS, JavaScript and PHP. The site is not reactive and does not make use of any JavaScript libraries. 
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>
							Visit
						</Meta>
						<Link href="https://michaelbobr.000webhostapp.com">
							michaelbobr.000webhostapp.com
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
