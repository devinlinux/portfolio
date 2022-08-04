import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Work = () => {
	return (
		<Layout title="JChess">
			<Container>
				<Title>
					JChess <Badge>2022</Badge>
				</Title>
					<P>
						A basic implentation of Chess written in Java. This game was made for a school project during my Freshman year of highschool. The game includes most rules of chess but does not include moves 
						such as castling or the en passant. 
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
							<span>Any Platform that has Java installed</span>
						</ListItem>
					</List>
			</Container>
		</Layout>
	)
}

export default Work
