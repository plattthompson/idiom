import React from 'react';

class Search extends React.Component {
	render() {
		return(
			<div className="search animated fadeInUp">
				<form onSubmit={this.props.searchDatabase} className="input-group mb-3">
					<input 
						type="text" 
						name="userInput" 
						className="form-control"
						placeholder="Type your sentence here" 
						required>
					</input>
					<div className="input-group-append">
						<button className="btn btn-primary">Calculate</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;