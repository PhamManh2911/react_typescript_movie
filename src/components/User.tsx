import {createContext, useState, Dispatch, SetStateAction, FC} from 'react'

interface PropsContext {
	user: {
		sessionId: string,
		username: string
	},
	setUser: Dispatch<SetStateAction<{
		sessionId: string,
		username: string
	}>>
}

const defaultValue = {
	user: {
		sessionId: "",
		username: ""
	},
	setUser: () => {return}
}

export const UserContext = createContext<PropsContext>(defaultValue)

const UserProvider:FC = ({children}) => {
	const [user, setUser] = useState(defaultValue.user)
	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider