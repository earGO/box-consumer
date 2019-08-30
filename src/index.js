import './assets/fonts/PTSans/font.css'

import React, {useState} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@design-system/theme'
import Normalize from 'react-normalize'

import store from './store'
import theme from './theme'
import {Text, Box, FlexContainerBottomDivider} from '@design-system/atoms'
import {Hint, DropdownMenu, AnimatedSearchInput} from '@design-system/molecules'
import {SingleDatePicker} from '@design-system/cells'
import {formatDate} from '@design-system/utils'

const RenderedDatePicker = ({props}) => {
  const [date, setDate] = useState([])

  const handlePick = value => {
    setDate(value)
    console.log(formatDate(value))
  }
  return (
    <Box>
      <SingleDatePicker onChange={handlePick} {...props} />
    </Box>
  )
}

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <Box bg={'primary'} width={1 / 2} color={'warning'}>
        <Text fontSize={6}>Test render</Text>
      </Box>
      <Box>
        <Hint>hint</Hint>
      </Box>
      <Box>
        <DropdownMenu>dropdown</DropdownMenu>
      </Box>
      <Box>
        <RenderedDatePicker />
      </Box>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
