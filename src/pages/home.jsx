import React, { useState} from "react"


export default function Home(){

    const [ extractedCode, setExtractedCode ] = useState("")

    const verifyCode = async () => {
        setExtractedCode(window.location.href)
    }
    verifyCode()
    return(
        <>
            hellooo
            {extractedCode}
        </>
    )
}