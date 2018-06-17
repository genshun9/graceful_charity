import * as React from 'react';

export default function WithLifecycleComponent<P>(
  Component: React.SFC<P>,
  hooks: {
    didMount?: (props: P) => void,
    willMount?: (props: P) => void,
    willUnmount?: (props: P) => void
    willReceiveProps?: (props: P) => void
  }
) {
  return class SFC extends React.Component<P, {}> {
    componentDidMount() {
      if (hooks.didMount) {
        hooks.didMount(this.props);
      }
    }

    componentWillMount() {
      if (hooks.willMount) {
        hooks.willMount(this.props);
      }
    }

    componentWillUnmount() {
      if (hooks.willUnmount) {
        hooks.willUnmount(this.props);
      }
    }

    componentWillReceiveProps() {
      if (hooks.willReceiveProps) {
        hooks.willReceiveProps(this.props);
      }
    }

    render() {
      return (
        Component(this.props)
      )
    }
  }
}