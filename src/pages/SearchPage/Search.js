import React, {useEffect, useState} from 'react'

const SearchBar = ({
	list,
	setList,
	filterField = item => item, ...props
}) => {
	const [ value, setValue ] = useState("");

	useEffect(() => {
		const filterList = () => list.filter(item =>
			filterField(item).toLowerCase().includes(value.toLocaleLowerCase())
		);

		setList(value ? filterList() : list);
		// eslint-disable-next-line
	}, [ value ])

	const handleChange = (event) => setValue(event.target.value);

	return (
		<input
			type="text"
			autoComplete="off"
			placeholder="rechercher"
			name="search"
			onChange={handleChange}
			value={value}
			{...props}
		/>
	)
}

export default SearchBar;
