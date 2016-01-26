import React, { PropTypes } from 'react';

import bindToContext from 'app/utils/bindToContext';
import Dummies       from '../Dummies/Dummies';

import './App.scss';


export default class App extends React.Component {

  static propTypes = {
    apiCall: PropTypes.func.isRequired,
  };


  constructor(props, context) {
    super(props, context);

    this.state = {
      dummies  : [],
      isLoading: true,
    };

    bindToContext(this, [
      'setIsLoadingState',
      'loadDummies',
    ]);
  }


  componentDidMount() {
    this.loadDummies();
  }


  setIsLoadingState(isLoading) {
    this.setState({ isLoading });
  }


  loadDummies(cb) {
    const { apiCall } = this.props;

    apiCall({
      method: 'GET',
      url   : '/dummies',
    })
      .then(res => {
        this.setState({
          dummies  : res.data.dummies,
          isLoading: false,
        }, () => {
          if (cb && typeof cb === 'function') {
            return cb();
          }
        });
      });
  }


  render() {
    const { dummies, isLoading } = this.state;

    return (
      <Dummies
        {...this.props}
        {...{ dummies, isLoading }}
        reloadDummies={this.loadDummies}
        setLoadingStateTo={this.setIsLoadingState}
      />
    );
  }

}
