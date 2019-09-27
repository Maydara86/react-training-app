export const ONCHANGE_SEARCH_INPUT = 'ONCHANGE_SEARCH_INPUT'

const changeSearchHandler = event => {
  return { type: ONCHANGE_SEARCH_INPUT, payload: event.target.value }
}

export default changeSearchHandler
