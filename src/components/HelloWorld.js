import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { Component } from 'react'
import CodePush from 'react-native-code-push';

let CodePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
    mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
    updateDialog: {
        appendReleaseDescription: true,
        title: "a new update is available!"
    }
}

class HelloWorldInner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello, World RN Android Updated!!!'
        }
    }
    codePushStatusDidChange(status) {
        switch (status) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                ToastAndroid.show("Checking for updates.", ToastAndroid.SHORT)
                this.setState({
                    message: "Checking for updates."
                })
                break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                ToastAndroid.show("Downloading package.", ToastAndroid.SHORT)
                this.setState({
                    message: "Downloading package."
                })
                break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
                ToastAndroid.show("Installing update.", ToastAndroid.SHORT)
                this.setState({
                    message: "Installing update."
                })
                break;
            case CodePush.SyncStatus.UP_TO_DATE:
                ToastAndroid.show("Up-to-date.", ToastAndroid.SHORT)
                this.setState({
                    message: "Up-to-date."
                })
                break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                ToastAndroid.show("Update installed.", ToastAndroid.SHORT)
                this.setState({
                    message: "Update installed."
                })
                break;
        }
    }

    codePushDownloadDidProgress(progress) {
        ToastAndroid.show(progress.receivedBytes + " of " + progress.totalBytes + " received.", ToastAndroid.SHORT)
        this.setState({
            message: progress.receivedBytes + " of " + progress.totalBytes + " received."
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Version 1.6</Text>
                <Text style={styles.hello}>{this.state.message}</Text>
            </View>
        )
    }
}

export default CodePush(CodePushOptions)(HelloWorldInner);

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});