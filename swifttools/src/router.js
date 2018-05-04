import React, {Component} from 'react'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './routes/App/App'
import LiveAudioBack from './routes/Live/LiveAudioBack'
import Personal from './routes/Personal/Personal'
import AboutMe from './routes/Personal/PersonalAboutme'
import HelpCenter from './routes/Personal/PersonalHelpCenter'
import HelpCenterDetal from './routes/Personal/PersonalHelpCenterDetail'
import RecommendReward from './routes/Personal/PersonalRecommendReward'
import Detail from './routes/Personal/PersonalDetail'

const history = createBrowserHistory()

class RouterRoot extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/LiveAudioBack" component={LiveAudioBack}/>
                    {/* 个人中心 */}
                    <Route exact path="/Personal" component={Personal}/>
                    {/* 推荐有奖 */}
                    <Route path="/Personal/Detail" component={Detail}/>
                    {/* 关于我们 */}
                    <Route path="/Personal/Setting/AboutMe" component={AboutMe}/>
                    {/* 帮助中心 */}
                    <Route path="/Personal/Setting/HelpCenter" component={HelpCenter}/>
                    {/* 帮助中心 详情 */}
                    <Route path="/HelpCenterDetail/:title" component={HelpCenterDetal}/>
                    {/* 推荐有奖 */}
                    <Route path="/Personal/Setting/RecommendReward" component={RecommendReward}/>
                </div>
            </Router>
        );
    }
}

export default RouterRoot;