/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import SpeciesSummaryPanel from '../src/SpeciesSummaryPanel'

import { speciesSummary } from './TestUtils'

// A side benefit of mocking the cards is that we don’t need to mock window.matchMedia, which is used by the carousel
jest.mock(
  `@ebi-gene-expression-group/atlas-homepage-cards`,
  () => {
    const AtlasHomepageCardsMock = {
      CarouselCardsRow: function (props) {
        return (
          <div></div>
        )
      }
    }
    AtlasHomepageCardsMock.CarouselCardsRow.propTypes = {
      cards: function () {}
    }

    return AtlasHomepageCardsMock
  }
)

const carouselCardsRowProps = {
  className: `row expanded small-up-2 medium-up-3 large-up-6`,
  cardContainerClassName: `column`,
  sliderSettings: { slidesToShow: 2 },
  containerHeight: `320px`,
  sliderHeight: `300px`
}

describe(`SpeciesSummaryPanel`, () => {
  test(`runs callback after mounting`, () => {
    const container = document.createElement(`div`)
    document.body.appendChild(container)

    const mockCallback = jest.fn()
    act(() => {
      ReactDOM.render(
        <SpeciesSummaryPanel
          {...carouselCardsRowProps}
          speciesSummary={[]}
          onComponentDidMount={mockCallback}
        />,
        container)
    })

    expect(mockCallback.mock.calls.length).toBe(1)
  })

  test(`matches snapshot with something to show`, () => {
    const tree = renderer
      .create(<SpeciesSummaryPanel
        carouselCardsRowProps={carouselCardsRowProps}
        {...speciesSummary}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`matches snapshot with nothing to show`, () => {
    const tree = renderer
      .create(<SpeciesSummaryPanel
        carouselCardsRowProps={carouselCardsRowProps}
        speciesSummary={[]}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
