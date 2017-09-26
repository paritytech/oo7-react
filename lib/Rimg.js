// (C) Copyright 2016-2017 Parity Technologies (UK) Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//         http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';

import ReactiveComponent from './ReactiveComponent';

/**
 * {@link Bond}-aware, variant of `img` component.
 *
 * `src`, `className` and `style` props, and the child, behave as
 * expected but are {@link Bond}-aware.
 */
export default class Rimg extends ReactiveComponent {
	constructor () {
		super(['src', 'className', 'style']);
	}

	render () {
		return (
			<img
				src={this.state.src}
				className={this.state.className}
				style={this.state.style}
				name={this.props.name}
			/>
		);
	}
}
