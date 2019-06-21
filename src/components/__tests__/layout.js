import React from "react"
import renderer from "react-test-renderer"

import Layout from "../Layout"

describe("Layout", () => {
  const props = {
    location: "Sydney",
    title: "Test App",
  }

  it("renders a snapshot", () => {
    const layout = renderer.create(<Layout {...props} />).toJSON()
    expect(layout).toMatchSnapshot()
  })

  it("renders ", () => {})
})
