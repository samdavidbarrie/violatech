import React from 'react'
import {Container, Table, Label, Reveal, Card, Icon} from 'semantic-ui-react'

const jokes = [
    {joke: "What does a bee use to brush their hair?", punchline: "A honeycomb!"}
]
const Jokes = () => (
    <Container>

                    <Table.HeaderCell>Click me to see the punchline!</Table.HeaderCell>

                {jokes.map(joke =>
                    <Reveal animated='rotate'>
                        <Reveal.Content visible>
                    <Card>
                            <Card.Content description={joke.joke} />
                        </Card>
                        </Reveal.Content>
                        <Reveal.Content hidden>

                        <Card>
                            <Card.Content description={joke.punchline} />
                        </Card>
                        </Reveal.Content>
                    </Reveal>
                )}

    </Container>
)

export default Jokes
