import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Awesome6Icon from 'react-native-vector-icons/FontAwesome6';
import PersonalPosts from './MyPosts/PersonalPosts';
import PersonalReels from './MyPosts/PersonalReels';
import TaggedPosts from './MyPosts/TaggedPosts';

const MyPosts = () => {
    const [index, setIndex] = useState(0);

    const routes = [
        { key: 'first', iconName: "grid-on", iconType: "MaterialIcon" },
        { key: 'second', iconName: "video-collection", iconType: "MaterialIcon" },
        { key: 'third', iconName: "user-tag", iconType: "Awesome6Icon" }
    ];

    const handleTabPress = (idx) => {
        setIndex(idx);
    };

    const renderTabBar = () => {
        return (
            <View style={styles.tabBar}>
                {routes.map((route, idx) => (
                    <TouchableOpacity
                      activeOpacity={1}
                        key={route.key}
                        style={[styles.tabItem, index === idx && styles.selectedTab]}
                        onPress={() => handleTabPress(idx)}
                    >
                        {route.iconType === "Awesome6Icon" ? (
                            <Awesome6Icon name={route.iconName} size={24} color={index === idx ? 'white' : 'gray'} />)
                            : (
                                <MaterialIcon name={route.iconName} size={24} color={index === idx ? 'white' : 'gray'} />)
                        }
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <PersonalPosts />;
            case 'second':
                return <PersonalReels />;
            case 'third':
                return <TaggedPosts />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderTabBar()}
            {renderScene({ route: routes[index] })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%"
    },
    selectedTab: {
        marginBottom:0,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
});

export default MyPosts;
