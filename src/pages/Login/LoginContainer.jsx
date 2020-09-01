import { loginUser } from '../../redux/auth-reducer'
import Login from './Login'
import { connect } from 'react-redux'
import { getIsAuthSelector, getCaptchaSelector } from '../../redux/auth-selector'

const mapStateToProps = (state) => ({
	isAuth: getIsAuthSelector(state),
	captcha: getCaptchaSelector(state)
})

const mapDispatchToProps = {
	loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
