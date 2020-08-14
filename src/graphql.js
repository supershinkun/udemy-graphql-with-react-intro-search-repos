import {gql} from "apollo-boost";

export const ME = gql`
    query me {
        user(login: "supershinkun") {
            name
            avatarUrl
        }
    }
`

export const SEARCH_REPOSITORIES = gql`
    query searchRepositories($after:String,$before:String,$first:Int,$last:Int,$query:String!){
        search(after:$after,before:$before,first:$first,last:$last,query:$query,type:REPOSITORY){
            repositoryCount
            pageInfo{
                endCursor
                startCursor
                hasPreviousPage
                hasNextPage
            }
            edges{
                cursor
                node{
                    ... on Repository{
                        id
                        name
                        url
                        stargazers{
                            totalCount
                        }
                        viewerHasStarred
                    }
                }
            }
        }
    }
`

export const ADD_STAR = gql`
    mutation addStar($input: AddStarInput!){
      addStar(input: $input){
        starrable{
          id
          viewerHasStarred
        }
      }
    }
`