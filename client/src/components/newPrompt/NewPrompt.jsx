import './newPrompt.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Upload from '../upload/Upload'
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData:{}
    })

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView({behavior: "smooth"});
    }, []);
    return (
        <>

        {img.dbData?.filePath && (
            <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                path={img.dbData?.filePath}
            />
        )}
        <div className="endChat" ref={endRef}></div>
            <form className='newForm'>
                <Upload setImg={setImg}/>
                <input id="file" type="file" multiple={false} hidden/>
                <input type="text" placeholder='Ask anything...'/>
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    )
}

export default NewPrompt