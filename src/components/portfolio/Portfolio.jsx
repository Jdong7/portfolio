import "./portfolio.scss"
import {anime} from 'animejs'

function tester() {

}

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col heading">
                        Portfolio
                    </div>
                </div>
                <div className="row">
                    <div className="col fullwidth ma-2">
                        <div className="content">
                            one
                        </div>
                    </div>
                    <div className="col fullwidth ma-2">
                        <div className="content">
                            one
                        </div>
                    </div>
                    <div className="col fullwidth ma-2">
                        <div className="content">
                            one
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

