import React, { useState } from 'react';
import {
	Col,
	Modal,
	ModalBody,
	ModalHeader,
	Input,
	Collapse,
} from 'reactstrap';
import Coordinates from 'coordinate-parser';
import { reverseGeocode } from '../../../utils/reverseGeocode';
import { FaFilter } from "react-icons/fa";
import {SubmitButton, PlaceInfo} from './helpers';

export default function FindPlace(props) {
	const [foundPlacesList, setFoundPlacesList] = useState();
	const [placeString, setPlaceString] = useState('');
	const [checked, setChecked] = useState(false);

	return (
		<Modal isOpen={props.isOpen} toggle={props.toggleFindPlace}>
			<FindPlaceHeader
				toggleFindPlace={props.toggleFindPlace}
			/>

			<PlaceSearch
				foundPlacesList={foundPlacesList}
				setFoundPlacesList={setFoundPlacesList}
				placeString={placeString}
				setPlaceString={setPlaceString}
			/>

			<Filter
				checked={checked}
				setChecked={setChecked}
			/>

			<SubmitButton
				title= 'Search'
				testId= 'find-place-button'
				append={props.append}
				foundItems={foundPlacesList}
				setString={setPlaceString}
			/>
		</Modal>
	);
}

function FindPlaceHeader(props) {
	return (
		<ModalHeader className='ml-2' toggle={props.toggleFindPlace}>
			Where would you like to go?
		</ModalHeader>
	);
}


function Filter(props){
	// const handleChange = () => {
	// 	setChecked(!checked);
	//   };

	return (
		<ModalBody>
			<Col>
			<label>

			<Checkbox
				id="airport"
			/>
			Airport &nbsp;

			<Checkbox
				id="heliport"
			/>
			Heliport  &nbsp;

			<Checkbox
				id="ballonport"
			/>
			Balloonport

			</label>
			</Col>
		</ModalBody>	
	);
}

function Checkbox(props){
	const handleChange = () => {
		setChecked(!checked);
	  };
	return(
			<input
				type="checkbox"
				id={props.id}
				onChange={handleChange}
			/>
	);
}
  
function PlaceSearch(props) {


	return (
		<ModalBody>

			<Col>
				<Input
					onChange={(input) => updatePlaceString(props, input.target.value)}
					placeholder='restaurants, hotels, car rentals...'
					data-testid='keyword-input'
					value={props.placeString}
				/>
				<PlaceInfo found={props.foundPlacesList} />
			</Col>
		</ModalBody>
	);
}

function updatePlaceString(props, input){
	props.setPlaceString(input);
}
