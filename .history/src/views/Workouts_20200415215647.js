import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
} from 'react-native';

export default class Workouts extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount(): void {
    }

    componentWillUnmount(): void {
    }

    showAlert(title, message, actions) {
        Alert.alert(
            title,
            message,
            actions,
            {cancelable: false}
        )
    }

    showSpinner() {

    }

    hideSpinner() {

    }

    // 9. render
    renderSubComponents() {
        return (
            <View style={styles.subContainer}>
                <Text>SubComponent</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSubComponents()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    subContainer: {

    }
});