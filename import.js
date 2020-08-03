const { SiteClient } = require("datocms-client")
const client = new SiteClient("78870640d86b56facc985cb5e2ea3c")
const config = require("./gatsby-config")

config.siteMetadata.products.reduce(
  (chain, product) =>
    chain
      .then(() =>
        client.uploadImage(
          `https://raw.githubusercontent.com/renamelie/bebeCoders/master/src/images/${product.id}.jpg`
        )
      )
      .then(image =>
        client.items.create({
          name: product.name,
          image,
          price: product.price,
          itemType: "270114",
        })
      ),
  Promise.resolve()
)
