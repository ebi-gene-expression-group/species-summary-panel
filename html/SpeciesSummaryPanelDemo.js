import React from 'react'
import ReactDOM from 'react-dom'

import SpeciesSummaryPanel from '../src/SpeciesSummaryPanel'
import withFetchLoader from 'atlas-react-fetch-loader'

const FetchLoadSpeciesSummaryPanel = withFetchLoader(SpeciesSummaryPanel)

const render = (options, target) => {
  ReactDOM.render(<FetchLoadSpeciesSummaryPanel {...options} />, document.getElementById(target))
}

export { render }
