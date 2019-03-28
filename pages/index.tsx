import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { PortfolioBlock } from "components/portfolio-block/PortfolioBlock";
//import PortImg from 'assets/images/one.jpg';

const IndexPage = (props) => (
  <>
    <Helmet title="Home" />

    <Intro>
      <Highlight>Hello</Highlight> 👋🏼 and welcome to my portfolio site. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    </Intro>

    <PortfolioBlock
      data={[
        { heading: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          fluid: <Img fluid={props.data.imageOne.childImageSharp.fluid} />, 
          to: 'https://twitter.com/9ntonio' 
        },
        { heading: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          fluid: <Img fluid={props.data.imageOne.childImageSharp.fluid} />, 
          to: 'https://twitter.com/9ntonio' 
        },
        { heading: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          fluid: <Img fluid={props.data.imageOne.childImageSharp.fluid} />, 
          to: 'https://twitter.com/9ntonio' 
        },
        { heading: "Lorem Ipsum", 
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          fluid: <Img fluid={props.data.imageOne.childImageSharp.fluid} />, 
          to: 'https://twitter.com/9ntonio' 
        },
      ]}
    />

    <BlockText
      heading="So what's under the hood?"
      description={(
        <>
          <Highlight>TypeScript</Highlight><Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>, <Highlight>React Hooks</Highlight>, &nbsp;
          <Highlight>root resolver</Highlight>, <Highlight>code splitting</Highlight> and a lot of love. <br />
          &lt;&gt; with &hearts; in San Francisco. ✌🏼
        </>
      )}
    />
  </>
);

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 640, quality: 70) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
  }
`