import React, { PropTypes } from 'react';

import Spinner from '../Spinner/Spinner';

import css from './Dummies.scss';
import cssVars from '!!sass-variable-loader!./Dummies.scss';

export default class Dummies extends React.Component {

  static propTypes = {
    dummies  : PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };


  renderSpinner() {
    const { isLoading } = this.props;

    return (
      <div className={css.spinnerSection}>
        {isLoading && <Spinner size={20} />}
      </div>
    );
  }


  renderDummiesList() {
    const { dummies } = this.props;

    return (
      <div>
      {
        dummies.map(dummy => (
          <div key={dummy.id}>
            {dummy.dummy}
          </div>
        ))
      }
      </div>
    );
  }


  render() {
    return (
      <section className={css.dummies}>
        <h1>Long story short!</h1>
        <div className={css.subTitle}>
          This section is about {cssVars.sectionWidth} wide
        </div>
        {this.renderSpinner()}
        {this.renderDummiesList()}
      </section>
    );
  }

}
