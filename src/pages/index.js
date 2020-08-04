import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allDatoCmsProduct

  return (
    <Layout>
      <SEO title="Home" />
      <main className="grid-container">
        {products.edges.map(({ node: product }) => (
          <article className="grid-item" key={product.id}>
            <h2>{product.name}</h2>
            <Img fluid={product.image.fluid} loading="lazy"></Img>
            <p>{`${product.price} €`}</p>
            <a
              href="/"
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-description={product.name}
              data-item-price={product.price}
              data-item-image={product.image.url}
              data-item-name={product.name}
              data-item-url="/"
              data-item-payment-interval={product.sub ? "Month" : null}
              data-item-payment-interval-count={product.sub ? "1" : null}
            >
              Ajouter au panier
            </a>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          sub
          image {
            url
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
