import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../store/types"
import {selectValue} from "../store/slices/twoFormSlice"


export const RadioBox = () => {
    const dispatch = useDispatch()
    const selectedValue = useSelector((state: RootState) => state.twoForm.selectedValue)
    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(selectValue(event.target.value));
    };
 return (<div>
         <label htmlFor="option1" className="flex items-center">
             <input
                 type="radio"
                 id="option1"
                 name="myOptions"
                 value="option1"
                 checked={selectedValue === 'option1'}
                 onChange={radioChange}
                 className="hidden"
             />
             <span
                 className={`${selectedValue === 'option1' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option1' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>
                      )}
                    </span>
             <span className="ml-2 text-gray-700">1</span>
         </label>
         <label htmlFor="option2" className="flex items-center">
             <input
                 type="radio"
                 id="option2"
                 name="myOptions"
                 value="option2"
                 checked={selectedValue === 'option2'}
                 onChange={radioChange}
                 className="hidden"
             />
             <span
                 className={`${selectedValue === 'option2' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option2' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>
                      )}
                    </span>
             <span className="ml-2 text-gray-700">2</span>
         </label>
         <label htmlFor="option3" className="flex items-center">
             <input
                 type="radio"
                 id="option3"
                 name="myOptions"
                 value="option3"
                 checked={selectedValue === 'option3'}
                 onChange={radioChange}
                 className="hidden"
             />
             <span
                 className={`${selectedValue === 'option3' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option3' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>

                      )}
                    </span>
             <span className="ml-2 text-gray-700">3</span>
         </label>
     </div>
 )
}