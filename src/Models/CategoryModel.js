import Category from "../Schemas/categorySchema"

export const getById = ( id ) => {
	if ( !id ) return false
	const category = await Category.findById(id).exec()
	return category
}

export const saveCategory = async ( data ) => {
	const category = new Category(data)
	return await category.save()
}

export const update = async ( id, data ) => {
	if ( !id || !data ) return false
	return await Category.findByIdAndUpdate(id, data).exec()
}

export const deleteById = async ( id ) => {
	if ( !id ) return false
	return await Category.findByIdAndDelete(id).exec()
}

export const getOneCategoryByParam = async ( param ) => {
	if ( typeof param != "object" ) return false
	return await Category.findOne(param).exec()
}

export const searchByParams = async ( params ) => {
	if ( typeof params != "object" ) return false
	const filter = Object.keys(params).map( key => ({[key]: new RegExp( params[key], "i" ) }))
	return await Category.find({$or: filter}).exec()
}