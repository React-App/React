/**
 *  Created by zhangshumeng on 2018/5/10
 */

import React, {Component} from 'react'

import {requestLiveHotLiveList} from '../../service/RequestLive'
import LiveListCell from './LiveListCell'


class LiveHotLiveList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentWillMount() {
        document.title = '热门'

        this.requestLiveHotLiveListData()
    }

    requestLiveHotLiveListData() {
        requestLiveHotLiveList(this.props.match.params.accessToken, this.props.match.params.user_id, '1')
            .then((success) => {

                this.setState({
                    dataSource: success
                })
                console.log(success)
            })
            .catch((file) => {
                console.log(file)
            })
    }

    render() {
        return (
            <div>{
                <LiveListCell dataArray={this.state.dataSource}/>
            }</div>
        );
    }
}

export default LiveHotLiveList;
