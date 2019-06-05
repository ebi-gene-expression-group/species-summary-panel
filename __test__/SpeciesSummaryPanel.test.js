import SpeciesSummaryPanel from '../src/SpeciesSummaryPanel'
import { shallow, mount } from 'enzyme'

import { speciesSummary } from './TestUtils'

describe(`SpeciesSummaryPanel`, () => {
  test(`runs callback after mounting`, (done) => {
    expect(shallow(
      <SpeciesSummaryPanel
        speciesSummary={[]}
        carouselCardsRowProps={{
          className: `row expanded small-up-2 medium-up-3 large-up-6`,
          cardContainerClassName: `column`,
          sliderSettings: {slidesToShow: 2},
          containerHeight: `320px`,
          sliderHeight: `300px`
        }
        }
        onComponentDidMount={done}/>
    ))
  })

  test(`renders correctly`, () => {
    const carouselCardsRowProps={
      className: `row expanded small-up-2 medium-up-3 large-up-6`,
      cardContainerClassName: `column`,
      sliderSettings: {slidesToShow: 2},
      containerHeight: `320px`,
      sliderHeight: `300px`
    }
    expect(mount(<SpeciesSummaryPanel {...speciesSummary} carouselCardsRowProps={carouselCardsRowProps}/>)).toMatchSnapshot()
    expect(mount(<SpeciesSummaryPanel speciesSummary={[]} carouselCardsRowProps={carouselCardsRowProps}/>)).toMatchSnapshot()
  })
})
