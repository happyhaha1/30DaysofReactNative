'use strict';
import React, {
    Component,
    requireNativeComponent
    
} from 'react-native';

class VisualView extends Component{
	render() {
    return (
      <RCTVisualView
        {...this.props}
        style={[{
          backgroundColor: 'transparent',
        }, this.props.style
        ]}
      />
    );
  }
}

VisualView.propTypes = {
  visualType: React.PropTypes.string,
};
const RCTVisualView = requireNativeComponent('RCTVisualView', VisualView);

export default module = VisualView;