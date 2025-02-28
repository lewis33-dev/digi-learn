import { Messages,Users } from '../schema'

// course and classes

const createMessage = async ({author,receipient,classId,body,attachment}) => {
    try {
        
        await Messages.create({
            author,
            receipient,
            classId,
            body,
            attachment
        })
        return ({message:"Success"})
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}




