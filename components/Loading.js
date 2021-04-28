import styled from "styled-components"
import {Circle} from "better-react-spinkit"
function Loading() {
    return (
        <center style={{display :"grid", placeItems:"center", height:"100vh"}}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOti3dAd-O_Da0rVmoCvOmpdhqN6smw-GqCx4E1Ih8LRD6pXWvWfpDcRYzcWfbyESwVs&usqp=CAU"
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle color="#35A335" sixe={60}/>
            </div>
        </center>
    )
}

export default Loading
