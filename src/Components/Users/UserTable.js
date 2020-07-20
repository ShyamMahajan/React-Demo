import React, { useState, useEffect, Fragment } from 'react';
import ReactTable from 'react-table-6';
import { Button } from 'reactstrap';
import 'react-table-6/react-table.css';
import { getUserList,deleteUser, viewUser } from '../../Apis';
import { FaEye, FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import swal from 'sweetalert'
import ViewUserModal from './ViewUsersModal'

const UserTable = (props) => {
	const [ tblData, setTblData ] = React.useState([]);
	const [ searchText, setSearchText ] = useState("");
	const [modal,setModal] = useState(false);
	const [userDetails,setUserDetails] = useState({})

	const toggleModal = ( ) => setModal(!modal)

	useEffect(() => {
		getUserList(`?search=${searchText}`).then((res) => {
			setTblData(res);
		});
	}, [searchText]);

	const formAction = (action,data) =>  {
		if(action === "add"){
			props.history.push("/users/add")
		}
		if(action === "edit"){
			props.history.push(`/users/edit/${data.id}`,data)
		}
	}

	const userDeleteHandler = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this record!",
			icon: "warning",
			buttons: true,
			dangerMode: true
		  }).then(willDelete => {
			  if(willDelete){
				  deleteUser(id).then(res => {
					  swal("Deleted", {
						  icon : "success"
					  });
					  getUserList().then((res) => {
						setTblData(res);
					});
				  })
			  }
		  })

	}

	const showUserDetails = (id) => {
		viewUser(id).then(res => {
			setUserDetails(res)
		})
		setModal(true)
	}

	const columns = [
		{
			Header: 'Avatar',
			accessor: 'avatar',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 100,
			Cell: (props) => (
				<div className="react-action-class">
					<img
						height="30px"
						src={props.original.avatar}
						alt="profile"
					/>
				</div>
			)
		},
		{
			Header: 'Name',
			accessor: 'name',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class'
		},
		{
			Header: 'Email',
			accessor: 'email',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class'
		},
		{
			Header: 'Action',
			accessor: 'action',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 300,
			Cell: (props) => {
				return (
					<div className="">
						<Button
							data-test = "view-button"
							className="c-btn mr-10"
							color="success"
							onClick={() => showUserDetails(props.original.id)}>
							<div className="fs-12 medium-text">
								<FaEye /> View
							</div>
						</Button>
						<Button
							data-test = "edit-button"
							className="c-btn mr-10"
							color="primary"
							onClick={() => formAction("edit",props.original)}>
							<div className="fs-14 medium-text">
								<FaEdit /> Edit
							</div>
						</Button>
						<Button
							data-test = "delete-button"
							color="danger"
							className="c-btn c-danger"
							onClick={() => userDeleteHandler(props.original.id)}>
							<div className="fs-14 medium-text">
								<FaTrash /> Delete
							</div>
						</Button>
					</div>
				);
			}
		},
		{
			Header: 'Created On',
			accessor: 'createdAt',
			className: 'text-center',
			filterable: false,
			sortable: false,
			headerClassName: 'react-table-header-class',
			width: 150,
			Cell: (props) => {
				return `${new Date(props.original.createdAt).getMonth() +
					1}/${new Date(
					props.original.createdAt
				).getDate()}/${new Date(
					props.original.createdAt
				).getFullYear()}`;
			}
		}
	];

	return (
		<Fragment>
		<ViewUserModal
		data-test = "component-user-modal"
        userDetails={userDetails}
        toggle={toggleModal}
        modal={modal}
      />
		<div className="plr-15 table" data-test="user-table">
			<div className="heading">
				<div className="b-text"># Users</div>
				<div className="searchbar">
					<div className="search">
						<input
							data-test="search-input"
							value={searchText || ''}
							onChange={(e) => setSearchText(e.target.value)}
							type="text"
							placeholder="Search..."
							className="fs-14 medium-text plr-10 form-control"
						/>
					</div>
						<Button
							data-test = "add-button"
							className="c-btn mr-10"
							color="warning"
							onClick={() => formAction("add")}>
							<div className="fs-12 medium-text">
								<FaPlus /> Add User
							</div>
						</Button>
				</div>
			</div>
			<ReactTable
				className="-striped -highlight reactTable"
				data={tblData}
				columns={columns}
				minRows={0}
				defaultPageSize={8}
			/>
		</div>
		</Fragment>
	);

};

export default UserTable;
