import * as React from 'react'

export class ConditionalRouteProps {
    condition: boolean | null
    component: typeof React.Component
    location: string

    redirect: (currentLocation: string) => void
}

class ConditionalRoute extends React.Component<ConditionalRouteProps> {
    
    constructor(props: ConditionalRouteProps) {
        super(props)
    }

    componentWillMount () {
        if (this.props.condition === null) {
            return
        }

        if (!this.props.condition) {
            this.props.redirect(this.props.location)
        }
    }

    componentWillReceiveProps(nextProps: ConditionalRouteProps) {
        if (nextProps.condition === null) {
            return
        }
        
        if (!nextProps.condition) {
            this.props.redirect(this.props.location)
        }
    }

    render() {
        if (this.props.condition) {
            const Component = this.props.component
            return (<div><Component /></div>)
        } else {
            return null
        }
    }

}

export default ConditionalRoute
