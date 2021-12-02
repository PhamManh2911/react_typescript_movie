import {useReducer, useContext, ChangeEventHandler, FormEventHandler} from 'react'
import {UserContext} from "../User"
import {useNavigate} from "react-router-dom"
import Spinner from "../Spinner"
import API from "../../API"
import {Wrapper, Content} from "./Login.styles"

interface State {
	account: {
		username: string,
		password: string
	},
	message: string,
	loading: boolean,
	err: boolean
}

type Actions = 
	{
		type: "set_username" | "set_password" | "set_message",
		data: string
	} 
	| {
		type: "toggle_loading" | "true_err" | "false_err"
	}

const initialState = {
	account: {
		username: "",
		password: ""
	},
	message: "",
	loading: false,
	err: false
}

const reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "set_username":
			return {
				...state,
				account: {
					...state.account,
					username: action.data
				}
			}
		case "set_password":
			return {
				...state,
				account: {
					...state.account,
					password: action.data
				}
			}
		case "set_message": 
			return {
				...state,
				message: action.data
			}
		case "toggle_loading":
			return {
				...state,
				loading: !state.loading
			}
		case "true_err":
			return {
				...state,
				err: true
			}
		case "false_err": 
			return {
				...state,
				err: false
			}
		default:
			return state
	}
}

export default function Login() {
	const {setUser} = useContext(UserContext)	
	const navigate = useNavigate()
	const [state, dispatch] = useReducer(reducer, initialState)
	const handleInput:ChangeEventHandler<HTMLInputElement> = (event) => {
		const name = event.target.name
		const value = event.target.value
		if (name === "username") return dispatch({type: "set_username", data: value})
		if (name === "password") return dispatch({type: "set_password", data: value})
	}
	const handleSubmit:FormEventHandler<HTMLFormElement> = async(event) => {
		try {
			event.preventDefault()
			dispatch({type: "toggle_loading"})
			dispatch({type: "false_err"})
			const requestToken = await API.getRequestToken()
			const response = await API.authenticate(
				requestToken, 
				state.account.username,
				state.account.password
			)
			if (!response.success) {
				dispatch({type: "toggle_loading"})
				dispatch({type: "set_message", data: response.status_message})
				return
			}
			setUser({
				sessionId: response.session_id, 
				username: state.account.username
			})
			dispatch({type: "toggle_loading"})
			navigate("/")
		} catch(err) {
			dispatch({type: "true_err"})
			navigate("/login")
		}
	}
 	return (
		<div style={{margin: "80px auto", width: "400px"}}>
			{!state.loading ? 
				<Wrapper>
					<Content onSubmit={handleSubmit}>
						{state.err ? <div className="error">Your account or password is not correct !!!</div> : null}
						<label>Username</label>
						<input type="text" placeholder="Username" value={state.account.username} name="username" onChange={handleInput} />
						<input type="password" placeholder="Password" value={state.account.password} name="password" onChange={handleInput} />
						<div style={{color: "red", marginTop: "0.5em"}}>
							{state.message.length !== 0 ? state.message : null}
						</div>
						<input type="submit" value="Log in" />
					</Content>
				</Wrapper>
			: <Spinner />}
		</div>
	)
}