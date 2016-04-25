import React from 'react'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';

import PaddedPaper from './PaddedPaper';

export default class EnemyInfo extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			armor: 0,
			resistance: 0,
			damageReduced: 0,
			evasion: 0
		}

        context.i18n.on('languageChanged', (lng) => {this.forceUpdate()});
	}

	componentWillMount() {
		this.props.onChange(null, this.state);
	}

	handleChange(name, event, value) {
		let state = {};
		state[name] = value;
		this.setState(state, () => {this.props.onChange(event, this.state)});
	}

	render() {

        const t = this.context.i18n.getFixedT();

		return (
			<PaddedPaper>
				<h2>{t('common:enemy')}</h2>
				<TextField
				  floatingLabelText={t('common:armor')}
				  onChange={this.handleChange.bind(this, 'armor')}
				  value={this.state.armor}
				/><br/>
				<TextField
				  floatingLabelText={t('common:resistance')}
				  onChange={this.handleChange.bind(this, 'resistance')}
				  value={this.state.resistance}
				/><br/>
				<TextField
				  floatingLabelText={t('common:damageReducedBy')}
				  onChange={this.handleChange.bind(this, 'damageReduced')}
				  value={this.state.damageReduced}
				/>%<br/>
				<TextField
				  floatingLabelText={t('common:evasion')}
				  onChange={this.handleChange.bind(this, 'evasion')}
				  value={this.state.evasion}
				/><br/>
			</PaddedPaper>
		);
	}
}

EnemyInfo.propTypes = {
	onChange: React.PropTypes.func
};

EnemyInfo.defaultProps = {
	onChange: (event, info) => {}
};

EnemyInfo.contextTypes = {
	i18n: React.PropTypes.object.isRequired
};