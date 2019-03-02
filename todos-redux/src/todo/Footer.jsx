import React from 'react'
import LinkContainer from './LinkContainer'
import { VisibilityFilters } from './actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <LinkContainer filter={VisibilityFilters.SHOW_ALL}>
      All
    </LinkContainer>
    <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </LinkContainer>
    <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </LinkContainer>
  </div>
)

export default Footer
