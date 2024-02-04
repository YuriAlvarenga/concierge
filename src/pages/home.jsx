import React, { useState, useEffect } from "react"


export default function Home(){

    const [ extractedCode, setExtractedCode ] = useState("")
    
    const verifyCode = async () => {
      if (data){
        setExtractedCode = data.split('/').pop()
      }
      }
      verifyCode()
    return(
        <>
            {extractedCode}
        </>
    )
}