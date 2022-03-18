import Account from "../Schemas/accountSchema"

export const getById = async (id) => {
	if ( !id ) return false
	const account = await Account.findById(id).exec()
	return account
}

export const getAllAccountsByUserId = async ( userId ) => {
	if ( !userId ) return false
	const accounts = await Account.find({userId}).exec()
	return accounts
}

export const saveAccount = async ( data ) => {
	const account = new Account(data)
	return await account.save()
}

export const update = async ( id, data ) => {
	if ( !id || !data ) return false
	return await Account.findByIdAndUpdate(id, data, { new: true }).exec()
}

export const deleteById = async ( id ) => {
	if ( !id ) return false
	return await Account.findByIdAndDelete(id).exec()
}

export const deleteAllAccountsByUserId = async ( userId ) => {
	if ( !userId ) return false
	return await Account.deleteMany( { userId } ).exec()
}

export const getOneAccountByParam = async ( param ) => {
	if ( typeof param != "object" ) return false
	return await Account.findOne(param).exec()
}

export const searchByParams = async ( params, exact ) => {
	if ( typeof params != "object" ) return false
	const filter = Object.keys(params).map( key => ({
		[key]: exact ? params[key] : new RegExp( params[key], "i" )
	}))
	return await Account.find({$or: filter}).exec()
}