import React, { useState } from "react";
import NewStoryFrom from "./Form"

const Madlib = () => {
    const [story, setStory] = useState("")

    const addStory = (newStory) => {
        setStory(newStory)
    }

    return (
        <div className="App">
            <h1>Madlibs!</h1>
            <NewStoryFrom addStory={addStory} />
            <div className="Stories">
                {story && <p>{story}</p>}
            </div>
        </div>
    )
}

export default Madlib