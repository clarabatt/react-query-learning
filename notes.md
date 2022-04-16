# React Query

## Client State vs Server State

### Client state

Information relevant to browser session

- Language
- Theme

### Server state

Information stored on server (provided by API)

- Blog post data
- Access

## What problem does React Query solve?

The source of truth pass to be the *react query cache*

> Cache management of server data on client
> The code around of fetch data is menial.
> RQ Job is maintain the data in the cache
> Maintains loadings and error states for every query
> Help you with pagination and infinite scroll
> Prefetching
> Mutations: change data on the server
> Requests managing to does not duplicate them
> Retry if you get an error
> Callbacks: Take actions after a query

Programmer's job: indicate when want to update the cache.

```js
    key: 'blog-posts'
    data: [
        1: {
            title: 'React Query',
            tagLine: 'What is this thing?'
        },
        2: {
            title: 'React Query Mutations',
            tagLine: 'Not just for ninja turtles'
        }
    ]
    staleTime: 30 seconds
```

### Ways to update the cache

1. Imperatively: invalidate data

2. Declaratively: configure how (e.g. window focus) & when to trigger a re-fetch

## isFetching vs isLoading

`isFetching` contain `isLoading`

`isFetching`
the async query function hasn't yet resolved

`isLoading`
no cached data, plus isFectching

## RQ Dev Tools

- Shows queries (by key)
    - status
    - last updated
- Data explorer
- Query explorer

## States vs cachetime

### Stale
Is no longer fresh
staleTime = "max age"
how long to tolerate?

staleTime is for re-fetching
cache is for data that might be re-used later
    - query goes into "cold storage" if there's no active useQuery
    - cache data expires after cacheTime (default:five minutes)
    - how long it's been since the last active useQuery
after the cache expires, the data is garbage collected
cache is backup data to display while fetching. You can sent cache time to 0.
