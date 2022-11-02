import { useDispatch } from 'react-redux'
import './received.css'
const ReceivedDocuments = ({ document, current}) => {
    const dispatch = new useDispatch()
    const currentDocument = () => {
        current(document.docno);

        if(document.readStatus) {
            dispatch({type:'RECEIVED_ACTION', payload:{action:'Forward', current: document.docno, makeAction:false}});
        } else {
            dispatch({type:'RECEIVED_ACTION', payload:{action:'Receive', makeAction:false, data:document}});
        }
        dispatch({type: 'HIDE_NOTIFICATION'})
    }

    return (
        <>
            <div className="received-item">
                <p
                    className={document.readStatus === false ? 'mark-read' : ''}
                    onClick={currentDocument}>{document.docno}</p>
            </div>
        </>
    )
}

export default ReceivedDocuments;