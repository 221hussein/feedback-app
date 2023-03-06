import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import {motion,AnimatePresence} from 'framer-motion'


function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <h3>Loading ...</h3> : (
        <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item,index) => (
            <motion.div 
                key={index}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <FeedbackItem key={index} item={item} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //         {feedback.map((item,index) => (
    //             <motion.div 
    //                 key={index}
    //                 initial={{opacity: 0}}
    //                 animate={{opacity: 1}}
    //                 exit={{opacity: 0}}
    //             >
    //                 <FeedbackItem key={index} item={item} />
    //             </motion.div>
    //         ))}
    //         </AnimatePresence>
    //     </div>
    //   )
//   return (
//     <div className='feedback-list'>
//         {feedback.map((item,index) => (
//             <FeedbackItem key={index} item={item} 
//             handleDelete= {handleDelete}/>
//         ))}
//     </div>
//   )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.array.isRequired
   
// //    =========== this is another way to do it with an array
//     // feedback :PropTypes.arrayOf(
//     //     PropTypes.shape({
//     //         id :PropTypes.number.isRequired,
//     //         text: PropTypes.string.isRequired,
//     //         rating: PropTypes.number.isRequired,
//     //     })
//     // )
// }

export default FeedbackList