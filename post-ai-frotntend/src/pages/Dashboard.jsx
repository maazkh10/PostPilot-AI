import React, {  useRef, useState } from 'react'
import LeftIconBar from '../components/LeftIconBar' 
import TodoSidebar from '../components/TodoSidebar'
import CalendarHeader from '../components/CalendarHeader'
import CalendarGrid from '../components/CalendarGrid'
import CreatePostModal from '../components/CreatePostModal'

import ComposerView from '../components/ComposerView'

import AccountsView from '../components/AccountsView'

function Dashboard() {
    const [isModalOpen , setIsModalOpen] = useState(false)
    const [activeTab , setActiveTab] = useState("dashboard")

    const [refreshTrigger , setTrigger] = useState(0) 
    const calendarRef = useRef(null)

    const [currentRange , setCurrentRange] = useState({
        start : null,
        end : null
    })


    const triggerCalendarRefresh = () =>{
      setTrigger(prev => prev + 1)
    }

  return (
    <div className='w-screen h-screen flex bg-white'>
        <div className='w-screen h-screen flex bg-white font-sans antialiased text-neutral-800

    overflow-hidden'>

      <LeftIconBar 

      activeTab={activeTab}

      setActiveTab={setActiveTab}

      onLogout={() => console.log("login out")} />

      

      {/* <TodoSidebar 

      onCreatePostClick={() => setIsModalOpen(true)} />

      <div className='flex-1 flex flex-col h-screen relative'>

 

 <CalendarHeader />

 <CalendarGrid />





      </div> */}

      

      



      {/* that thing as dynamic  */}

      {activeTab === "dashboard" &&(

        <>

         <TodoSidebar onCreatePostClick={() => setIsModalOpen(true)} />



          <div className='flex-1 flex flex-col h-screen relative'>

            <CalendarHeader 

            calendarRef={calendarRef}

            currentRange={currentRange}

            />

            <CalendarGrid 

            calendarRef={calendarRef}

            onDateSet={(info) =>{

              setCurrentRange({

                start : info.start , 

                end : info.end

              })

            }}

            />

          </div>

        </>

      )}



      {activeTab === "composer" && <ComposerView />}

      {activeTab === "accounts" && <AccountsView />}

      

      <CreatePostModal 
      isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
      onPostCreated={triggerCalendarRefresh}
      />

      </div>
    </div>
  )
}

export default Dashboard