import React from 'react';

class Search extends React.Component {
	render() {
		return(
			<div className="search">
				<form onSubmit={this.props.searchDatabase} className="input-group mb-3">
					<input 
						type="text" 
						name="userInput" 
						className="form-control"
						// aria-describedby="basic-addon2"
						placeholder="Type your sentence here" 
						// data-parse="lowercase" 
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