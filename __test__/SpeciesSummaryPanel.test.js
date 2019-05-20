import matchMedia from './matchMedia' // Must be imported before the tested file

import SpeciesSummaryPanel from '../src/SpeciesSummaryPanel'
import { shallow, mount } from 'enzyme'

import { speciesSummary } from './TestUtils'

describe(`SpeciesSummaryPanel`, () => {
  test(`runs callback after mounting`, (done) => {
    expect(shallow(
      <SpeciesSummaryPanel
        speciesSummary={[]}
        onComponentDidMount={done}/>
    ))
  })

  test(`renders correctly`, () => {
    expect(mount(<SpeciesSummaryPanel {...speciesSummary}/>)).toMatchSnapshot()
    expect(mount(<SpeciesSummaryPanel speciesSummary={[]}/>)).toMatchSnapshot()
  })
})
