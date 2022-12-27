import React from 'react'; /* 
import pure from 'recompose/pure'; */
import {useStyles} from './PromotionsStyles';

import AvatarField from './AvatarField';

const FullNameField = ({record, size}) => {
	const classes = useStyles();
	return record ? (
		<div className={classes.root}>
			{record.image && record.image.url && (
				<AvatarField className={classes.avatar} record={record} size={size} />
			)}
			<p style={{color: 'black'}}>Promoción</p>
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
