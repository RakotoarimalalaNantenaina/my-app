import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import './App.css';

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <AddUserForm addUser={addUser} />
        </div><br></br>
        <div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label id="nom">Nom &nbsp;&nbsp;</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label id="nom">&nbsp;&nbsp;Prénom &nbsp;&nbsp;</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />&nbsp;&nbsp;
			&nbsp;&nbsp;<button class="btn btn-primary">Ajouter</button>
		</form>

	)
}	

export default App