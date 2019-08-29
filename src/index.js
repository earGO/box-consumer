import './assets/fonts/PTSans/font.css'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from '@design-system/theme'
import Normalize from 'react-normalize'

import store from './store'
import theme from './theme'
import DynamicRoutes from './DynamicRoutes'

render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Normalize />
			<DynamicRoutes />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)
