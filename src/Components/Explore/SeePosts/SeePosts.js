import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable, TouchableHighlight } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Comments from '../../Home/Post/Comments';
import { usePosts, useComments, useReports } from '../../../store';
import Reportoptions from '../../Home/Post/Reportoptions';
import { useExplorePostOpen } from '../../../store';

function SeePosts() {
    const { isOpen, setOpen } = useComments();
    const { posts, setPosts, setLiked } = usePosts();
    const { isReportOpen, setReportOpen } = useReports()
    const{explorePost}=useExplorePostOpen()

    const item =explorePost
    return (
        <View style={{backgroundColor:"black",display:"flex",flex:1,}}>
            <View style={{ marginBottom: 15 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image
                            source={{
                                uri: item.profile
                            }}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>{item.username}</Text>
                    </View>
                    <TouchableHighlight onPress={() => {
                        setReportOpen()
                        console.log(isReportOpen)
                    }} underlayColor='#333333' style={{ borderRadius: 20, }}>
                        <View>
                            <FeatherIcon name='more-vertical' size={20} color='white' style={{ padding: 5 }} />
                        </View>
                    </TouchableHighlight>

                </View>
                <Image
                    source={{
                        uri: item.picture
                    }}
                    style={{ width: '100%', height: 300 }}
                />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10, gap: 15 }}>
                    <TouchableHighlight onPress={() => {
                        setLiked(item.postId, item.isLiked)
                    }
                    }>
                        <AntIcon name={item.isLiked ? 'heart' : 'hearto'} size={30} color={item.isLiked ? 'red' : 'white'} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setOpen()}>
                        <FeatherIcon name='message-circle' size={30} color='white' />
                    </TouchableHighlight>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: "white", fontWeight: 'bold' }}>{item.likes} likes</Text>
                    <Text style={{ color: "white" }}><Text style={{ fontWeight: 'bold' }}>{item.username}</Text> {item.caption}</Text>
                </View>
            </View>
            {isOpen ? <Comments /> : null}
            {isReportOpen ? <Reportoptions /> : null}
        </View>
    )
}

export default SeePosts
