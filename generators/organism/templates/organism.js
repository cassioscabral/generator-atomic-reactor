'use strict';

import React from 'react';

require('./stylesheets/<%= filename %>.scss');

class <%= component %> extends React.Component {
  render() {
    return (
      <div className="<%= componentClass %>">
        Please edit <%= filepath %> to update this component!
      </div>
    );
  }
}

<%= component %>.displayName = 'Organism<%= component %>';

// Uncomment properties you need
// <%= component %>.propTypes = {};
// <%= component %>.defaultProps = {};

export default <%= component %>;
