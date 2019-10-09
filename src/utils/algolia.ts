// frontmatter: {purpose: {eq: "page"}}
const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/blog/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
          date(formatString: "MMM D, YYYY")
          tags
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = (arr: { map: (arg0: ({ node: { frontmatter, ...rest } }: any) => any) => void }) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    settings,
    query: pageQuery,
    transformer: ({ data }: { data: { pages: { edges: any[] } } }) => flatten(data.pages.edges),
    indexName: `Pages`,
  },
  {
    settings,
    query: postQuery,
    transformer: ({ data }: { data: { posts: { edges: any[] } } }) => flatten(data.posts.edges),
    indexName: `Posts`,
  },
];

export default queries;
