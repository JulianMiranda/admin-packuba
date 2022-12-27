import React from 'react'; /* 
import pure from 'recompose/pure'; */
import {useStyles} from './CarnetsStyles';

const FullNameField = ({record, size}) => {
	const classes = useStyles();
	return record ? (
		<div className={classes.root}>
			{/* <AvatarField className={classes.avatar} record={record} size={size} /> */}
			{record.name} {record.firstLastName} {record.secondLastName}
		</div>
	) : null;
};
/* 
const PureFullNameField = pure(FullNameField); */
/* 
PureFullNameField.defaultProps = {
	source: 'name',
	label: 'resources.users.fields.name',
};
 */
export default FullNameField;
