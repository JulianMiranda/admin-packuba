import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({record, size = '25', className}) => {
	console.log(record);
	return record && record.image.url ? (
		<Avatar
			src={record.image.url}
			style={{
				width: parseInt(size, 15),
				height: parseInt(size, 15),
				borderRadius: 8
			}}
			className={className}
		/>
	) : null;
};

export default AvatarField;
