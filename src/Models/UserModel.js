import User from "../Schemas/userSchema"

export const getById = async ( id ) => {
	if ( !id ) return false
	const user = await User.findById(id).exec()
	return user
}

export const saveUser = async ( data ) => {
	const user = new User(data)
	return await user.save()
}

export const update = async ( id, data ) => {
	if ( !id || !data ) return false
	return await User.findByIdAndUpdate(id, data).exec()
}

export const deleteById = async ( id ) => {
	if ( !id ) return false
	return await User.findByIdAndDelete(id).exec()
}

export const getOneUserByParam = async ( param ) => {
	if ( typeof param != "object" ) return false
	return await User.findOne(param).exec()
}

export const searchByParams = async ( params, exact ) => {
	if ( typeof params != "object" ) return false
	const filter = Object.keys(params).map( key => ({
		[key]: exact ? params[key] : new RegExp( params[key], "i" )
	}))
	return await User.find({$or: filter}).exec()
}