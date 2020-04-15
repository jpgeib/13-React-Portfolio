import React from 'react';

import './HomeParagraphs.css';

const HomeParagraphs = props => {
    return (
        <div className="col-sm-8 col-xs-12" id="paragraphs">
            <div className="content1">
                <p>
                    I am a graduate of Fordham University with two Bachelor's
                    degrees in Communications: Digital Technology and Emerging Media,
                    and Film/Television Studies. Currently living in Oakland, CA.
                </p>
            </div>

            <div className="content2">
                <p>
                    I am proficient in multiple Adobe Creative Cloud applications,
                    have many years of experience working in Microsoft Office, and a basic knowledge of
                    HTML5, CSS, Javascript, and SQL programming languages.
                </p>
            </div>

            <div className="content3">
                <p>
                    I am ideally looking for a position that will allow me
                    to utilize my pre-exisiting skills in Adobe, and improve
                    upon them as I use them throughout the job. Alternatively, I am
                    also looking for a web development or data engineering position to
                    utilize my current set of coding languages. If you would like to see
                    examples of my work, please consult my portfolio.
                </p>
            </div>
        </div>
    );
}

export default HomeParagraphs;