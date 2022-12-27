import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ImageField,
	SimpleForm,
	NumberInput
} from 'react-admin';

const PriceEdit = (props) => {
	return (
		<Edit {...props}>
			<SimpleForm redirect="list">
				<NumberInput
					style={{margin: 15}}
					source="rate"
					label="Cambio de Paqueteria"
					min={0}
				/>
				<NumberInput
					style={{margin: 15}}
					source="mn"
					label="Moneda Nacional"
					min={0}
				/>
				<NumberInput style={{margin: 15}} source="mlc" label="MLC" min={0} />
				<NumberInput
					style={{margin: 15}}
					source="oneandhalfkgPrice"
					label="1.5 Kg"
					min={0}
				/>
				<NumberInput
					style={{margin: 15}}
					label="2 Kg"
					source="twokgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="3 Kg"
					source="threekgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="4 Kg"
					source="fourkgPrice"
					min={0}
					step={0.25}
				/>

				<NumberInput
					style={{margin: 15}}
					label="5 Kg"
					source="fivekgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="6 Kg"
					source="sixkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="7 Kg"
					source="sevenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="8 Kg Antiguo"
					source="eigthkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="8 Kg Actual"
					source="eightkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="9 Kg"
					source="ninekgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="10 kg"
					source="tenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="11 kg"
					source="elevenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="12 kg"
					source="twelvekgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="13 kg"
					source="thirteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="14 kg"
					source="fourteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="15 kg"
					source="fifteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="16 kg"
					source="sixteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="17 kg"
					source="seventeenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="18 kg"
					source="eighteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="19 kg"
					source="nineteenkgPrice"
					min={0}
					step={0.25}
				/>
				<NumberInput
					style={{margin: 15}}
					label="20 kg"
					source="twentykgPrice"
					min={0}
					step={0.25}
				/>
			</SimpleForm>
		</Edit>
	);
};
export default PriceEdit;
