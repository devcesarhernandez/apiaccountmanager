import Platform from "../Schemas/platformSchema"

export const getById = ( id ) => {
	if ( !id ) return false
	const platform = await Platform.findById(id).exec()
	return platform
}

export const savePlatform = async ( data ) => {
	const platform = new Platform(data)
	return await platform.save()
}

export const update = async ( id, data ) => {
	if ( !id || !data ) return false
	return await Platform.findByIdAndUpdate(id, data).exec()
}

export const deleteById = async ( id ) => {
	if ( !id ) return false
	return await Platform.findByIdAndDelete(id).exec()
}

export const getOnePlatformByParam = async ( param ) => {
	if ( typeof param != "object" ) return false
	return await Platform.findOne(param).exec()
}

export const searchByParams = async ( params ) => {
	if ( typeof params != "object" ) return false
	const filter = Object.keys(params).map( key => ({[key]: new RegExp( params[key], "i" ) }))
	return await Platform.find({$or: filter}).exec()
}