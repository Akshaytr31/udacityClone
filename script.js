let isExpanded=false
function dropDown(){
    const drop=document.getElementById('dropDown-menu')
    const icon=document.getElementById('dropDownIcon')
    console.log("clicked")
    // drop.style.height="unse

    if(isExpanded){
        drop.style.height='0'
        icon.innerHTML=`<svg viewBox="0 0 32 32" focusable="false" class="chakra-icon css-4tokux" aria-hidden="true"><path d="M24 21a1 1 0 010 2H8a1 1 0 010-2h16zm0-6a1 1 0 010 2H8a1 1 0 010-2h16zm0-6a1 1 0 010 2H8a1 1 0 010-2h16z" fill="currentColor"></path></svg>`;
    }else{
        drop.style.height='100%'
        icon.innerHTML=`<svg viewBox="0 0 32 32" focusable="false" class="chakra-icon css-4tokux" aria-hidden="true"><path d="M9.293 9.293a1 1 0 011.414 0L16 14.585l5.293-5.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L17.415 16l5.292 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L16 17.415l-5.293 5.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L14.585 16l-5.292-5.293a1 1 0 01-.083-1.32z" fill="currentColor"></path></svg>`
    }
    isExpanded=!isExpanded

}




//
async function loadCourses(){
    try{
       const response=await fetch('popular.json')
       const courses=await response.json ()

       const courseList=document.getElementById('course-list')
       
    }catch(error){
        console.error('Failed to load courses:',error)
    }
}


