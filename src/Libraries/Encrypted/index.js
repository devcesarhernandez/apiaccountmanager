import bcrypt from "bcrypt"

export default {
    hashPassword: async password => {
        return await bcrypt.hash(password, 10)
    },

    verifyPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash)
    }
}