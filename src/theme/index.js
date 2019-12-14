import { merge } from 'lodash'
import theme from '@rebass/preset'

import * as colors from './colors'

export { default as FontStyles } from './fonts'

export default merge(theme, {
  colors: {
    ...colors,
  },
})
