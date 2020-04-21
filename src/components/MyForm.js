import React, { useState } from 'react';
import { useForm, useField } from 'react-form';
import axios from 'axios';

async function sendToFakeServer(values) {
	console.log({ values });
	const results = await axios
		.post('/send', {
			data: {
				name: values.Name,
				email: values.Email,
				phone: values.Phone
			}
		})
		.then(res => {
			return 'Done';
		})
		.catch(err => {
			return 'Sorry';
		});
	return results;
}

async function validateField(type, instance) {
	if (!type) {
		return `${instance.fieldName} is required`;
	}

	return instance.debounce(async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
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
	const [status, setStatus] = useState(null);
	const {
		Form,
		meta: { isSubmitting, canSubmit }
	} = useForm({
		onSubmit: async (values, instance) => {
			await sendToFakeServer(values).then(res => {
				res === 'Done' &&
					setStatus('Thanks for your email, We will be in touch soon');
				res === 'Sorry' &&
					setStatus('Sorry Something went wrong! We are working on a fix!');
			});
		},
		debugForm: false
	});

	return (
		<Form className='my-form'>
			{status !== null ? (
				<div className='field-container'>
					<em>{status}</em>
				</div>
			) : (
				<>
					<div className='form-group field-container'>
						<Field type='Name' className='form-control' />
					</div>
					<div className='form-group field-container'>
						<Field type='Email' className='form-control' />
					</div>
					<div className='form-group field-container'>
						<Field type='Phone' required={false} className='form-control' />
					</div>
					<div className='form-group'>
						<button
							className='btn btn-primary'
							type='submit'
							disabled={!canSubmit}>
							Contact Me!
						</button>
					</div>
					<div className='field-container'>
						<em>{isSubmitting ? 'Submitting...' : null}</em>
					</div>
				</>
			)}
		</Form>
	);
};

export default MyForm;
