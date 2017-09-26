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
 * {@link Bond}-aware component for displaying hash values.
 *
 * Hash value (encoded as hex and `0x` prefixed) should be placed in `value` prop.
 *
 * `value`, `className` and `style` props behave as expected but are {@link Bond}-aware.
 */
export default class Hash extends ReactiveComponent {
	constructor () {
		super(['value', 'className', 'style']);
	}

	render () {
		const v = this.state.value;
		const d = typeof v === 'string' && v.startsWith('0x') && v.length >= 18
			? v.substr(0, 8) + '…' + v.substr(v.length - 4)
			: v;

		return (
			<span
				className={this.state.className}
				style={this.state.style}
				title={this.state.value}
				name={this.props.name}
			>{d}</span>
		);
	}
}

Hash.defaultProps = {
	className: '_hash'
};
