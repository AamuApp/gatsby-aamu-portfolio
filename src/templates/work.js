import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const work = ({data}) => (<Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.aamu.Work.title}</h1>
        <p className="sheet__lead">{data.aamu.Work.excerpt}</p>
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.aamu.Work.gallery.map(({image}) => (
              <GatsbyImage key={image.childImageSharp.id} alt="" image={image.childImageSharp.gatsbyImageData} />
            ))}
          </Slider>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.aamu.Work.description,
          }}
        />
        <div className="sheet__gallery">
          <GatsbyImage alt="" image={data.aamu.Work.coverImage.image.childImageSharp.gatsbyImageData} />
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String) {
      aamu {
      Work(slug: $slug) {
        title
        excerpt
        gallery {
          url
          image {
            childImageSharp {
              id
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        description
        coverImage {
          url
          image {
            childImageSharp {
              id
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default work;