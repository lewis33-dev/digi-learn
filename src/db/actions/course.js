import { Classes,Courses,Users } from '../schema'

// course and classes
// Need to add rating coures, updating user progress uploading project files

const createCourse = async ({userId,name,category}) => {
    try {
        const userFound = await Users.find({userId})
        if (userFound.isTeacher != true) return ({message:"User is not teacher"})
        
        await Courses.create({
            name,
            category,
            teacher:userId
        })
        return ({message:"Success"})
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const editCourse = async ({id,thumbnail,description}) => {
    try {
        const courseFound = await Courses.findById(id)
        if (!courseFound) return {message:"Course does not exist"}

        courseFound.thumbnail = thumbnail
        courseFound.description = description
        courseFound.save()

        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const deleteCourse = async ({id}) => {
    try {
        const courseFound = await Courses.findById(id)
        if (!courseFound) return {message:"Course does not exist"}
        
        courseFound.remove()
        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

// Enroll course
const enrollCourse = async ({id,userId}) => {
    try {
        const courseFound = await Courses.findById(id)
        if (!courseFound) return {message:"Course does not exist"}

        const studentDetails = {
            progress:0,
            ratings:0,
            project:undefined,
            user:userId
        }
        courseFound.students.push(studentDetails)
        courseFound.save()

        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

//classes
const createClass = async ({courseId,name}) => {
    try {
        
        await Classes.create({
            name,
            courseId
        })
        return {message:"Success"}
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const editClass = async ({id,thumbnail,description,project,video}) => {
    try {
        const classFound = await Classes.findById(id)
        if (!classFound) return {message:"Class does not exist"}

        classFound.thumbnail = thumbnail
        classFound.description = description
        classFound.project = project
        classFound.video = video

        classFound.save()

        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const reorderClass = async ({id,position}) => {
    try {
        const classFound = await Classes.findById(id)
        if (!classFound) return {message:"Class does not exist"}

        classFound.position = position
        
        classFound.save()

        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}

const deleteClass = async ({id}) => {
    try {
        const classFound = await Classes.findById(id)
        if (!classFound) return {message:"Class does not exist"}
        
        classFound.remove()
        return {message:"Success"}
        
    } catch (error) {
        console.log("Error running query", error);
        return {
            error:`Error running query, ${error.message}`
        }
    }
}
