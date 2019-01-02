import React, { PureComponent } from 'react';
import isMobileDevice from '../utils/isMobileDevice';
import Desktop from './Desktop';
import Loading from './Loading';
import Mobile from './Mobile';

interface State {
  loading: boolean;
  mobile: boolean;
}

class App extends PureComponent<{}, State> {
  public state = {
    loading: true,
    mobile: false,
  };

  public componentDidMount() {
    const mobile = isMobileDevice();
    this.setState({ loading: false, mobile });
  }

  public render() {
    const { loading, mobile } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (mobile) {
      return <Mobile />;
    } else {
      return <Desktop />;
    }
  }
}

export default App;
