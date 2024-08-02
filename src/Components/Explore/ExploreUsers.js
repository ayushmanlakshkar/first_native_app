import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import { InstaData } from '../../assets/data';

function ExploreUsers() {
    
    return (
        <View style={styles.container}>
            <View style={styles.recentHeading}>
                <TouchableOpacity>
                    <Text style={styles.recentText}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={InstaData.ExploreUsers}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        activeOpacity={0.6}
                        underlayColor="lightgrey" // Set the underlay color to a shade of grey
                        >
                            <View style={styles.itemContainer}>
                                <View>
                                    <Image
                                        source={{
                                            uri: item.profile
                                        }}
                                        style={{ height: 60, aspectRatio: 1, borderRadius: 30 }} />
                                </View>
                                <View style={styles.itemDetails}>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 18 }}>
                                            {item.username}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "grey" }}>
                                            {item.username}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.postId.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,      

    },
    recentHeading: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    recentText: {
        color: "white",
        fontSize: 19
    },
    seeAll: {
        color: "#007AFF",
    },
    itemContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        marginVertical: 8,
        borderRadius: 20,
        
    },
    itemDetails: {
        display: "flex",
        justifyContent: "center",
    }
})

export default ExploreUsers
