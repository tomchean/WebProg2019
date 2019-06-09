import { gql } from 'apollo-boost'

export const AUTHOR_SUBSCRIPTION = gql`
  subscription {
    user {
      mutation
      data {
        posts{
          title
          body
          published
        }
      }
    }
  }
`
export const POSTS_SUBSCRIPTION = gql`
  subscription {
    post {
      mutation
      data {
        title
        body
        author {
          name
        }
        published
      }
    }
  }
`