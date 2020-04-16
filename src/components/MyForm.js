import React from 'react';
import { useForm, useField } from 'react-form';

async function sendToFakeServer(values) {
	await new Promise(resolve => setTimeout(resolve, 1000));
	return values;
}

async function validateField(type, instance) {
	if (!type) {
		return `${instance.fieldName} is required`;
	}

	return instance.debounce(async () => {
		console.log('checking name');
		await new Promise(resolve => setTimeout(resolve, 1000));
		// All names are valid, so return a false error
		return false;
	}, 500);
}

function Field({ className, type, required = true }) {
	const {
		meta: { error, isTouched, isValidating },
		getInputProps
	} = useField(type, {
		validate: required && validateField
	});

	return (
		<>
			<input
				className={className}
				placeholder={`${type}:`}
				{...getInputProps()}
			/>
			{isValidating ? (
				<em>Validating...</em>
			) : isTouched && error ? (
				<em>{error}</em>
			) : null}
		</>
	);
}

const MyForm = function() {
	// Use the useForm hook to create a form instance
	const {
		Form,
		meta: { isSubmitting, canSubmit }
	} = useForm({
		onSubmit: async (values, instance) => {
			// onSubmit (and everything else in React Form)
			// has async support out-of-the-box
			await sendToFakeServer(values);
			console.log('Huzzah!');
		},
		debugForm: false
	});

	return (
		<Form className='my-form'>
			<div className='form-group field-container'>
				<Field type='Name' className='form-control' />
			</div>
			<div className='form-group field-container'>
				<Field type='Email' className='form-control' />
			</div>
			<div className='form-group field-container'>
				<Field type='Phone Number' required={false} className='form-control' />
			</div>

			<div className='form-group'>
				<button className='btn btn-primary' type='submit' disabled={!canSubmit}>
					Submit
				</button>
			</div>

			<div className='field-container'>
				<em>{isSubmitting ? 'Submitting...' : null}</em>
			</div>
		</Form>
	);
};

export default MyForm;
