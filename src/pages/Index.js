import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap"

function Home() {
    return (
        <div className="container" style={{ backgroundColor: '#019267' }}>
            <h3 style={{fontSize: '50px', color: '#FFD365'}}>
                Welcome to homepage
            </h3>
            <img className="mb-3" style={{ width: '100%' }} src="https://fswd-wp.devnss.com/wp-content/uploads/2022/02/a0e85189-0ebd-3e4b-a810-86dd04f7cda4.jpg"></img>
            <Link to={`/home`} style={{ color: 'black' }}>
                <Button variant="warning" style={{width: '100%', height: '80px'}} className="mb-3 flex-column bd-highlight mb-3" >
                    <h3 style={{fontSize: '50px', color: '#019267'}}>Enter to site</h3>
                </Button>
            </Link>
        </div>
    );
}

export default Home