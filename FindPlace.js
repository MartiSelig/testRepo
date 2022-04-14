import React, { useEffect, useState } from 'react';
import {
	Button,
	Col,
	Modal,
	ModalBody,
	ModalHeader,
	Input,
	Collapse,
	ModalFooter,
} from 'reactstrap';
import Coordinates from 'coordinate-parser';
import { reverseGeocode } from '../../../utils/reverseGeocode';
import { FaFilter } from "react-icons/fa";
import {SubmitButton} from './helpers';

export default function FindPlace(props) {
	const [foundPlacesList, setFoundPlacesList] = useState();
	const [placeString, setPlaceString] = useState('');

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
			{/* <FindPlaceFooter
				//submitButton={props.submitButton}
				append={props.append}
				foundPlacesList={foundPlacesList}
				setPlaceString={setPlaceString}
			/> */}
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

			<Button id="filter" data-testid='find-place-filter-button'
				onClick={() => {
					newAlert("Add filter select box")
				}}
			>
				<FaFilter  size={25}/>
			</Button>

		</ModalHeader>
	);
}

function newAlert(message){
	alert(message);
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
				<PlaceInfo foundPlacesList={props.foundPlacesList} />
			</Col>
		</ModalBody>
	);
}

function updatePlaceString(props, input){
	props.setPlaceString(input);
}

function PlaceInfo(props) {
	return (
		<Collapse isOpen={!!props.foundPlacesList}>
			<br />
			{props.foundPlacesList?.formatPlace()}
		</Collapse>
	);
}

// function FindPlaceFooter(props) {
// 	return (
// 		<SubmitButton
// 			title= 'Search'
// 			testId= 'find-place-button'
// 			append={props.append}
// 			foundItems={props.foundPlacesList}
// 			setString={props.setPlaceString}
// 		/>
// 	);
// }
