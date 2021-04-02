import React, { useState } from 'react';
import { Link } from "gatsby" 
import PartnerLogo from './partner-logo'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    partner: {
        position: 'relative',
        width: 250,
        height: 150,
        overflow: 'hidden',
        background: '#303030',
        '& a': {
            color: '#fff',
            textDecoration: 'none',
        },
        '& .divOverlay': {
            position: 'absolute',
            zIndex: 20,
            top: 140,
            left: 0,
            height: 150,
            width: 250,
            color: '#fff',
            fontSize: 11,
            backgroundColor: '#f90b39',
            '-webkit-transition': 'all 0.5s ease-in-out',
            '-moz-transition': 'all 0.5s ease-in-out',
            '-o-transition': 'all 0.5s ease-in-out',
            'transition': 'all 0.5s ease-in-out',     
            '& a.linkOverlay': {
                display: 'block',
                height: 140,
                padding: '5px 10px',
                color: '#fff',
                '& H2': {
                    color: '#fff',
                    fontWeight: 400,
                    fontSize: 15
                }
            }
        }  
    },
    picture: {
        zIndex: 10,
        top: 0,
        left: 0,
        textAlign: 'center',
        '& a': {
            display: 'table-cell',
            height: 150,
            width: 250,
            verticalAlign: 'middle'
        },
        '& img': {
            maxWidth: 230,
            maxHeight: 130
        }
    }
})

const PartnerItem = ({current}) => {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    const overlayStyle = isShown ? {top:10+'px'} : {top:140+'px'};

    return (
        <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} key={current.frontmatter.slug}>
            <div className={classes.partner} key={current.frontmatter.slug}>
                <div className={classes.picture}>
                    <Link to={current.frontmatter.slug}>
                        <PartnerLogo partner={current.frontmatter} />
                    </Link>
                </div>
                <div className="divOverlay" style={overlayStyle}>
                    <Link className="linkOverlay" to={current.frontmatter.slug}>
                        <h2>{current.frontmatter.title}</h2>
                    </Link>
                </div>
            </div>
        </div>    
  )
}

export default PartnerItem