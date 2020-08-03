import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.site.siteMetadata.products

  console.log(products)
  return (
    <Layout>
      <SEO title="Home" />
      <main className="grid-container">
        {products.map(product => (
          <article className="grid-item" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <a href="#">Ajouter au panier</a>
          </article>
        ))}
      </main>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
    site {
      siteMetadata {
        products {
          id
          name
          price
          image
        }
      }
    }
  }
`
