/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class fiveApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_polular'
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_polular'}
                        selectedTitleStyle={{color:'#FEFF31'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FEFF31'}]} source={require('./res/images/ic_polular.png')} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'tb_polular' })}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        selectedTitleStyle={{color:'#FF2EC8'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FF2EC8'}]} source={require('./res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={{color:'#FFA043'}}
                        title="收藏"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#FFA043'}]} source={require('./res/images/ic_favorite.png')} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color:'#84FF2B'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#84FF2B'}]} source={require('./res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: '#FEFF31'
    },
    page2: {
        flex: 1,
        backgroundColor: '#FF2EC8'
    },
    page3: {
        flex: 1,
        backgroundColor: '#FFA043'
    },
    page4: {
        flex: 1,
        backgroundColor: '#84FF2B'
    },
    image: {
        height: 22,
        width: 22
    }
});

AppRegistry.registerComponent('fiveApp', () => fiveApp);
