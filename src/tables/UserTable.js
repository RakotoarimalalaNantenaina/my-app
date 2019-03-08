import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = props => (	

	<table class="table">
		<thead class="thead-dark">
			<tr>
                <th scope="col">id</th>
				<th scope="col">Nom</th>
				<th scope="col">Prénom</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
                        <td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
						<button className="btn btn-danger" onClick={() => {props.deleteUser(user.id)}}>X</button>
						</td>
					</tr>
				))
			) : (
				<tr>	
				</tr>
			)}
			
		</tbody>
	</table>
)



export default UserTable