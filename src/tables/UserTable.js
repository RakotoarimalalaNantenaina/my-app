import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = props => (	

	<table class="table table-bordered">
		<thead class="thead-dark">
			<tr>
                <th scope="col"><center>id</center></th>
				<th scope="col"><center>Nom</center></th>
				<th scope="col"><center>Prénom</center></th>
				<th scope="col"><center>Action</center></th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
                        <td><center>{user.id}</center></td>
						<td><center>{user.name}</center></td>
						<td><center>{user.username}</center></td>
						<td>
						<center><button className="btn btn-danger" onClick={() => {
															confirmAlert({
															message: 'Confirmer la suppression',
															buttons: [
																{
																label: 'Oui',
																onClick: () => props.deleteUser(user.id)
																},
																{
																label: 'Non',
																onClick: () => ''
																}
															]
															})}}>X
								</button>
						</center>
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