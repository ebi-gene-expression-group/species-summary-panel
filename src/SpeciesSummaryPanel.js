import React from 'react'
import PropTypes from 'prop-types'

import { CarouselCardsRow } from '@ebi-gene-expression-group/atlas-homepage-cards'

const tabsId = `species-summary-tabs`

class SpeciesSummaryPanel extends React.Component {
  render () {
    const { speciesSummary, carouselCardsRowProps } = this.props

    return (
      [
        <ul key={`tabs`} className={`tabs`} data-tabs id={tabsId}>
          {
            speciesSummary.map(({ kingdom }, idx) =>
              <li key={idx} className={`tabs-title${idx === 0 ? ` is-active` : ``}`} style={{ textTransform: `capitalize` }}>
                <a href={`#${kingdom}`}>{kingdom}</a>
              </li>
            )
          }
        </ul>,
        <div key={`tabs-content`} className={`tabs-content`} data-tabs-content={tabsId}>
          {
            speciesSummary.map(({ kingdom, cards }, idx) =>
              <div key={idx} className={`tabs-panel${idx === 0 ? ` is-active` : ``}`} id={kingdom}>
                <CarouselCardsRow
                  cards={cards}
                  {...carouselCardsRowProps}
                />
              </div>
            )
          }
        </div>
      ]
    )
  }

  // Since the tabs need $().foundation() to function properly, we provide an optional callback to be run on the
  // target DOM node once the component has been initially rendered
  componentDidMount () {
    this.props.onComponentDidMount()
  }
}

SpeciesSummaryPanel.propTypes = {
  speciesSummary: PropTypes.arrayOf(PropTypes.shape({
    kingdom: PropTypes.string.isRequired,
    cards: CarouselCardsRow.propTypes.cards
  })).isRequired,
  onComponentDidMount: PropTypes.func,
  carouselCardsRowProps: PropTypes.object
}

SpeciesSummaryPanel.defaultProps = {
  onComponentDidMount: () => {},
  responsiveCardsRowProps: {}
}

export default SpeciesSummaryPanel
