import shedulepost from "../models/ScheduledPost";

import { createSchedule , getScheduleById ,
    deleteSchedule , getUserSchedules
 } from "../services/schedulerService";


 export const createScheduleController   = async  (req , res) =>{
try {
    
        const { postId, scheduledAt } = req.body;

        const userId = req.user._id;

        const sheduleData = {
            userId , 
            postId,
            scheduledAt , 
            status : "pending"
        }

        const shedule = await createSchedule(sheduleData)

        res.status(201).json({
            success : true,
            message : "created succesfylly" , 
            data : shedule
        })
} catch (error) {
    res.status(500).json({
        success : false , 
        message : error.message
    })
}
 }


 export const getUserSchedulesController  = async (req , res) =>{
 try {
    
    const userId = req.user._id

    const data = await getUserSchedules(userId)
    
    res.status(200).json({
        success : true , 
      message :"fetched succefully",
      data  
    })
 } catch (error) {
res.status(500).json({
        success : false , 
        message : error.message
    })    
 }
 }


 export const DeleteScheduleControllear  = async (req , res) =>{

    try {
        const {id} = req.params;

    console.log(id)


    const data = await deleteSchedule(id)
    
     
    res.status(200).json({
        success : true , 
      message :"dealte succefully",
      data  
    })
    } catch (error) {
res.status(500).json({
        success : false , 
        message : error.message
    })            
    }
 }


