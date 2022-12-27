import React from 'react';

export const CarnetsTitle = ({record}) => {
	return <span>Negocio {record ? `"${record.name}"` : ''}</span>;
};
