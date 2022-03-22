import React from "react"
import { storiesOf } from '@storybook/react'
import { ProgressBar } from "../components/ProgressBar"

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return(<ProgressBar />);
}) 