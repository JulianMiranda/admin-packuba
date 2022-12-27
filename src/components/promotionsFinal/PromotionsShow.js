import React from 'react';
import {
	useShowController,
	Show,
	ImageField,
	TextField,
	ReferenceField
} from 'react-admin';

import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, CardContent, Card} from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		marginTop: 20
	}
});

const PromotionsShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	/* console.log(record.car); */

	return (
		<Show {...props}>
			<Card>
				<CardContent>
					<TextField variant="h5" label="Dueño" source="owner" />
					<Typography variant="h5" gutterBottom>
						Foto
					</Typography>
					<ImageField label="Foto" source="image.url" />
					<Typography variant="h5" gutterBottom>
						Subcategoría
					</Typography>
					<TextField label="Sucategoría" source="subcategory.name" />
				</CardContent>
			</Card>
		</Show>
	);
};

export default PromotionsShow;
