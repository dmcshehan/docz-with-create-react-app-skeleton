const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dmcshehan/Desktop/projects/irene/example-existing-docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/dmcshehan/Desktop/projects/irene/example-existing-docz/README.md"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/Users/dmcshehan/Desktop/projects/irene/example-existing-docz/src/components/Button/Button.mdx")))
}

