import React from 'react';
import {useShowController, Show, ImageField, TextField} from 'react-admin';
import {
	Grid,
	CardContent,
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Avatar
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

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
					<TextField label={'Dueño'} source="owner" />
					<ImageField source="image.url" />
				</CardContent>
			</Card>
		</Show>
	);
};

export default PromotionsShow;
