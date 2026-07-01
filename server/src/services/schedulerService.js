import shedulepost from "../models/ScheduledPost";


export const createSchedule = async (sheduleData) =>{
    const create = await shedulepost.create(sheduleData)
    return create ;

}



export const getUserSchedules = async  (userId) =>{
try {
    
        const schedule = await shedulepost.find({userId})
        return schedule;
    
} catch (error) {
    console.log("error fetchinhg user schedule" , error)
    throw error
}
}


export const getScheduleById = async (postId) =>{

    try {
        const shedule = await shedulepost.findById({postId})
        return shedule 
    } catch (error) {
         console.log("error fetchinhg shedule post for this one" , error)
    throw error
    }
}

export const deleteSchedule = async (scheduleId) =>{

    try {
        const makeit = await shedulepost.findByIdAndDelete({scheduleId})
        
        return makeit
    } catch (error) {
        console.log("error inb deleting " , error)
    throw error
    }
}