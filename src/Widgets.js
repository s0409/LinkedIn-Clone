import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = ( heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("REACT.JS is Fun","Top news - 9099 Developers")}
            {newsArticle("Coronavirus: India Updates","Top news - 886 readers")}
            {newsArticle("Tesla hits new Highs","Cars & auto - 300 readers")}
            {newsArticle("Bitcoin Breaks $22k","Crypto - 8000 readers")}
            {newsArticle("REACT.JS is Fun","Code - 123 readers")}
            {newsArticle("Data Structures & Algorithm Blogs","Top news - 6500 readers")}
            
        </div>
    )
}

export default Widgets
