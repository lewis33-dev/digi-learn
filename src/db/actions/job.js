import { Jobs,Users } from '../schema'

// course and classes

const createJob = async ({userId,position}) => {
    try {
        const userFound = await Users.find({userId})
        if (userFound.isRecruter != true) return ({message:"User is not teacher"})
        
        await Jobs.create({
            position,
            recruiter:userId
        })
        return ({message:"Success"})
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const editJob = async ({id,location,nature,jobDescription,companyDescription,link}) => {
    try {
        const jobFound = await Jobs.findById(id)
        if (!jobFound) return {message:"Job does not exist"}

        jobFound.location = location
        jobFound.nature = nature
        jobFound.jobDescription = jobDescription
        jobFound.companyDescription = companyDescription
        jobFound.link = link

        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const deleteJob = async ({id}) => {
    try {
        const jobFound = await Jobs.findById(id)
        if (!jobFound) return {message:"Course does not exist"}
        
        jobFound.remove()
        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}


