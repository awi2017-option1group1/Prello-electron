import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import ConditionalRoute from './ConditionalRoute'
import { RootState, Dispatch } from '../../redux/RootReducer'

export function requireAuth(Component: React.ReactNode) {
    const mapStateToProps = (state: RootState) => ({
        condition: state.auth.isAuthenticated !== null ? state.auth.isAuthenticated : null,
        component: Component,
        location: state.router.location!.pathname
    })
    
    const mapDispatchToProps = (dispatch: Dispatch) => ({
        redirect: (currentLocation: string) => {
            window.location.replace(`/`)
        }
    })
    
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(ConditionalRoute)
}

export function requireNotAuth(Component: React.ReactNode) {
    const mapStateToProps = (state: RootState) => ({
        condition: state.auth.isAuthenticated !== null ? !state.auth.isAuthenticated : null,
        component: Component,
        location: state.router.location!.pathname
    })
    
    const mapDispatchToProps = (dispatch: Dispatch) => ({
        redirect: (currentLocation: string) => {
            dispatch(push(`/boards`))
        }
    })
    
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(ConditionalRoute)
}
