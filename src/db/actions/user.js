import {Users} from '../schema'
// users actions

const createUser = async ({userId,name,photo}) => {
    try {
        const userFound = await Users.find({userId})
        if (userFound) return {message:"User exists"}

        await Users.create({
            name,
            photo,
            userId
        })
        return {message:"Success"}
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const editUser = async ({id,isTeacher,isRecruiter}) => {
    try {
        const userFound = await Users.findById(id)
        if (!userFound) return {message:"User does not exist"}
        
        if (isTeacher) userFound.isTeacher = isTeacher
        if (isRecruiter) userFound.isRecruiter = isRecruiter

        userFound.save()
        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const deleteUser = async ({id}) => {
    try {
        const userFound = await Users.findById(id)
        if (!userFound) return {message:"User does not exist"}
        
        userFound.remove()
        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

