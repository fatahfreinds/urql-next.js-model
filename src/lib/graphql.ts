import {createClient} from 'urql'

const url = "http://result-gen.vercel.app/graphql" ;

export const client = createClient({url})