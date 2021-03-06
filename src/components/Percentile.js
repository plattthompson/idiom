import React from 'react';

class Percentile extends React.Component {
	render() {
		return(
			<div className="percentile animated fadeInUp">
				<h3 className="output-styling">Your sentence falls within</h3>
				<h3 className="percent-styling"><span className="percent-color">{this.props.percentile}</span>%</h3>
				<h3 className="output-styling">of the most common English words</h3>
			</div>
		)
	}
}

export default Percentile;