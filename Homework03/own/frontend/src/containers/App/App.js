import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION,
  AUTHOR_QUERY
} from '../../graphql'
import Post from '../../components/Post/Post'
import Author_post from  '../../components/Post/Author_post'
import Author from '../../components/Post/Author'
import classes from './App.module.css'

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    formAuthor: '1'
  }
  

  handleFormSubmit = e => {
    e.preventDefault()
    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody) return
    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor
      }
    }) 

    this.setState({
      formTitle: '',
      formBody: '',
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Query query={AUTHOR_QUERY}>
              {({ loading, error, data, subscribeToMore })=>{
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>
                const authors = data.users.map( (people) =>
                  <Author  id ={people.id} key={people.id} text={people}/>
                )
                return (
                  <FormGroup row>
                    <Label for="author" sm={3}>
                      Author
                    </Label>
                    <Col sm={10}>
                      <select
                        name="author"
                        id="author"
                        
                        onChange={e => {
                          this.setState({ formAuthor: e.target.value })
                          }                          
                        }
                      >
                      {authors}
                      </select>
                    </Col>
                  </FormGroup>
                )
              }}
            </Query>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={AUTHOR_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>
                console.log(data.users)
                const posts = data.users.map( (people,id) =>
                  <Author_post data={people} key ={id}/>
                );
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data
                      let index = data.users.findIndex( (user)=>{
                        return (newPost.author.name === user.name)
                      })
                      data.users[index].posts.push(newPost)
                      return {
                        users:data.users
                      }                      
                    }
                  })
                return <ul>{posts}</ul>
              }}
            </Query>
            {/*<Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>

                const posts = data.posts.map((post, id) => (
                  <Post data={post} key={id} />
                ))
                console.log(posts)
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      console.log(prev)
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })

                return <div>{posts}</div>
              }}
            </Query>*/}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
