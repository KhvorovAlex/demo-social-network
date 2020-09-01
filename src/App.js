import React from 'react'
import { Container, Row, Col } from 'bootstrap-4-react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initApp } from './redux/app-reducer'

import './App.css'

import Nav from './components/Nav/Nav'
import HeaderContainer from './components/Header/HeaderContainer'
import Preloader from './components/Preloader/Preloader'
import DialogCotainer from './pages/Dialogs/Dialog/DialogCotainer'
import Footer from './components/Footer/Footer'

const DialogsContainer = React.lazy(() => import('./pages/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./pages/Users/UsersContainer'))
const Music = React.lazy(() => import('./pages/Music/Music'))
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer'))
const LoginContainer = React.lazy(() => import('./pages/Login/LoginContainer'))

class App extends React.Component{

	componentDidMount(){
		this.props.initApp()
	}

	render(){

		if (!this.props.init) {
			return <Preloader />
		}

		return (
			<>				
				<HeaderContainer />
					
				<Container className="sections">
					<Row>
						<Col col="md-4">
							<Nav links={this.props.navLinkMenu}/>
						</Col>
						<Col col="md-8">
							<React.Suspense fallback={<div>Загрузка...</div>}>
								<Switch>														
									<Route path='/profile/:userId?' component={ProfileContainer}/>
									<Route exact path='/dialogs' component={DialogsContainer}/>
									<Route path='/dialogs/:userId' component={DialogCotainer}/>
									<Route path='/users' component={UsersContainer}/>
									<Route path='/login' component={LoginContainer}/>
									<Route path='/music/:musicName?' component={Music}/>
									<Redirect from="/" to='/profile'></Redirect>	
								</Switch>												
							</React.Suspense>
						</Col>
					</Row>				
				</Container>			

				<Footer />			
			</>
		)
	}	
}

const mapStateToProps = (state) => ({
	init: state.app.init,
	navLinkMenu: state.app.navLinkMenu
})

const mapDispatchToProps = {
	initApp
}

export default compose (
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(App)